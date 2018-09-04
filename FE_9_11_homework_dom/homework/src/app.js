var rootNode = document.getElementById('root');


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

  if (dragSrcEl !== this) {
    this.parentNode.removeChild(dragSrcEl);
    let dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin',dropHTML);
    let dropElem = this.previousSibling;
    addDragHandlers(dropElem);
    
  }
  return false;
}

function addDragHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('drop', handleDrop, false);
}

const zero=0;
const max_item=10;
var count = 1;
var lastItemIndex = zero;

disableInput(false);


function removeItem(index){
    let elem = document.getElementById('item' + index);
    rootNode.removeChild(elem);
    count --;
    if(count <=max_item){
        disableInput(false);
    }
}

function addItem(){
  
    let itemInput = document.getElementById('addItemInput');

    let newItem = itemInput.value;
    itemInput.value = ''; 

    let isDone = document.createElement('input');
    isDone.setAttribute('type', 'checkbox');
    isDone.setAttribute('onclick', 'isDone('+ lastItemIndex + ')');

    let content = document.createElement('span')
    content.innerHTML = newItem;

    let deleteIcon = document.createElement('i')
    deleteIcon.innerHTML = 'delete';
    deleteIcon.className = 'material-icons'
    deleteIcon.setAttribute('onclick', 'removeItem('+ lastItemIndex + ')');

    let itemDiv = document.createElement('div');
    itemDiv.setAttribute('draggable', true);
    itemDiv.setAttribute('class', 'dragable-item');
    itemDiv.id = 'item' + lastItemIndex;

    lastItemIndex ++;
    count ++;

    itemDiv.appendChild(isDone);
    itemDiv.appendChild(content);
    itemDiv.appendChild(deleteIcon);

    rootNode.appendChild(itemDiv);

    let drItems = document.querySelectorAll('#root .dragable-item');
    [].forEach.call(drItems, addDragHandlers);

    if(count > max_item){
        disableInput(true);
    }


}

function isDone(index){
    let item = document.getElementById('item' + index);
    let checkbox = item.getElementsByTagName('input')[zero];

    if(!checkbox.checked){
        checkbox.checked = true;
    }
}


function disableInput(shouldInputBeDisabled){
    let input = document.getElementById('addItemInput');
    let addBox = document.getElementById('addBox');
    let confirmation = document.getElementById('confirmation');
    if(shouldInputBeDisabled){
       input.disabled = true;
       addBox.removeAttribute('onclick');
       confirmation.innerHTML = 'Maximum item per list are created';
    } else {
       input.disabled = false;
       confirmation.innerHTML = '';
       if(!addBox.getAttribute('onclick')){
            addBox.setAttribute('onclick','addItem()');
       }
    }
}

