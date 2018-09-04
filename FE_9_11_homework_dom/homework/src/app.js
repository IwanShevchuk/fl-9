var rootNode = document.getElementById("root");


var dragSrcEl = null;

function handleDragStart(e) {
  dragSrcEl = this;
  e.dataTransfer.setData('text/html', this.outerHTML);
}
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function handleDrop(e) {

  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    var dropElem = this.previousSibling;
    addDragHandlers(dropElem);
    
  }
  return false;
}

function addDragHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('drop', handleDrop, false);
}


var count = 1;
var lastItemIndex = 0;

disableInput(false);


function removeItem(index){
    let elem = document.getElementById("item" + index);
    rootNode.removeChild(elem);
    count --;
    if(count <=10){
        disableInput(false);
    }
}

function addItem(){
    let itemInput = document.getElementById("addItemInput");

    let newItem = itemInput.value;
    itemInput.value = ""; 

    var isDone = document.createElement("input");
    isDone.setAttribute("type", "checkbox");
    isDone.setAttribute("onclick", "isDone("+ lastItemIndex + ")");

    var content = document.createElement('span')
    content.innerHTML = newItem;

    var deleteIcon = document.createElement('i')
    deleteIcon.innerHTML = "delete";
    deleteIcon.className = "material-icons"
    deleteIcon.setAttribute("onclick", "removeItem("+ lastItemIndex + ")");

    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("draggable", true);
    itemDiv.setAttribute("class", "dragable-item");
    itemDiv.id = "item" + lastItemIndex;

    lastItemIndex ++;
    count ++;

    itemDiv.appendChild(isDone);
    itemDiv.appendChild(content);
    itemDiv.appendChild(deleteIcon);

    rootNode.appendChild(itemDiv);

    var drItems = document.querySelectorAll('#root .dragable-item');
    [].forEach.call(drItems, addDragHandlers);

    if(count > 10){
        disableInput(true);
    }


}

function isDone(index){
    let item = document.getElementById("item" + index);
    let checkbox = item.getElementsByTagName("input")[0];

    if(!checkbox.checked){
        checkbox.checked = true;
    }
}


function disableInput(shouldInputBeDisabled){
    var input = document.getElementById("addItemInput");
    var addBox = document.getElementById("addBox");
    var confirmation = document.getElementById("confirmation");
    if(shouldInputBeDisabled){
       input.disabled = true;
       addBox.removeAttribute("onclick");
       confirmation.innerHTML = "Maximum item per list are created";
    } else {
       input.disabled = false;
       confirmation.innerHTML = "";
       if(!addBox.getAttribute("onclick")){
            addBox.setAttribute("onclick","addItem()");
       }
    }
}

