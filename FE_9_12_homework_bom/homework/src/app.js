const rootNode = document.getElementById('root');
const zeros1 = 0;

function setLocalStorageObjectItem(key, value) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
  
  function getLocalStorageObjectItem(key) {
    let json = localStorage.getItem(key);
    if (!json) {
      return [];
    }
    return JSON.parse(json);
  }

const modifyPage = `
    <div id="modifyPage">
        <h1>Modify</h1>
        <input id="modifyItemInput" class="input" type="text"></input>
        <div class="button-container">
            <a href="#" class="button cancel">Cancel</a>
            <span class="button save" onclick="modifyItem();">Save Changes</a>
        </div>
    </div>
`;

const addPage = `
    <div id="addPage">
        <h1>Add</h1>
        <input id="addItemInput" class="input" type="text"></input>
        <div class="button-container">
            <a href="#" class="button cancel">Cancel</a>
            <span class="button save" onclick="saveItem();">Save Changes</a>
        </div>
    </div>
`;


const todoItems = getLocalStorageObjectItem('todoitems');

var itemIdFromHash = null;

function locationHashChanged(){
    if(window.location.hash){
        let hash = window.location.hash.substring(1);
        let param = hash.split('/');
        
        if(param[zeros1] === 'add'){
            rootNode.innerHTML = addPage;
        } else if(param[zeros1] === 'modify'){
            itemIdFromHash = param[1];

            rootNode.innerHTML = modifyPage;

             let modifyItemInput = document.getElementById('modifyItemInput');
            
            let itemsToModify= todoItems.filter(function(item){
                return item.id === Number.parseInt(itemIdFromHash);
            });

            let index = todoItems.indexOf(itemsToModify[zeros1]);
            modifyItemInput.value = todoItems[index].description;
        } else {
            refreshMainPage();
        }

    } else {
        refreshMainPage();
    }
}


function modifyItem(){
    let modifyItemInput = document.getElementById('modifyItemInput');
    if (itemIdFromHash){
       
        let itemsToModify= todoItems.filter(function(item){
            return item.id === Number.parseInt(itemIdFromHash);
        });
    
        let index = todoItems.indexOf(itemsToModify[zeros1]);
        todoItems[index].description = modifyItemInput.value;

        setLocalStorageObjectItem('todoitems', todoItems);
        refreshMainPage();
    }
}

let addItemInput;
function saveItem(){
    // let addItemInput;
    let addItemInput = document.getElementById('addItemInput');
    todoItems.push({isDone: false, id: todoItems.length, description: addItemInput.value});

    setLocalStorageObjectItem('todoitems', todoItems);
    refreshMainPage();
}

// Your code goes here

function deleteItem(id){
    let itemsToDelete = todoItems.filter(function(item){
        return item.id === id;
    });

    let index = todoItems.indexOf(itemsToDelete[zeros1]);
    todoItems.splice(index, 1);
    refreshMainPage();
}

function isDone(id){
    if(!todoItems[findIndexById(id)].isDone){
       todoItems[findIndexById(id)].isDone = true;

       let temp = todoItems[findIndexById(id)]; 
       todoItems.splice(findIndexById(id),1);
       todoItems.push(temp);

       setLocalStorageObjectItem('todoitems', todoItems);
       refreshMainPage();
    }
}

function findIndexById(id){
    let item = todoItems.filter(function(item){
        return item.id === id ; 
    });

    let itemIndex = todoItems.indexOf(item[zeros1]);
    return itemIndex;
}

function refreshMainPage(){
    window.location.href = '#';
    rootNode.innerHTML = '';
    rootNode.appendChild(prepareToDoItemsPage());
}

function prepareToDoItemsPage(){

    let mainPage = document.createElement('div');
    let mainPageTitle = document.createElement('h1');
    mainPageTitle.innerText = 'Simple TODO application';
    let mainPageAddPage = document.createElement('a');
    mainPageAddPage.innerText = 'Add new task';
    mainPageAddPage.setAttribute('href', '#add');
    mainPageAddPage.setAttribute('class', 'button add-new-item');

    mainPage.appendChild(mainPageTitle);
    mainPage.appendChild(mainPageAddPage);
   

    let itemTable= document.createElement('table');

    if(todoItems.length === zeros1 ){
        let notodo = document.createElement('h1');
        notodo.innerText = 'No todo items';
        itemTable.appendChild(notodo);
        mainPage.appendChild(itemTable);
        return mainPage;
    }

    todoItems.forEach(function (item){
        let itemTR = document.createElement('tr');
        if(item.isDone){
            itemTR.setAttribute('class', 'done');
        }

        let itemTDforCheckBox = document.createElement('td');

            let isDone = document.createElement('input');
            isDone.setAttribute('type', 'checkbox');
            isDone.setAttribute('id', 'checkbox_' + item.id);
            isDone.setAttribute('class', 'checkbox');
            if(item.isDone){
                isDone.setAttribute('checked', 'checked');
            }
            isDone.setAttribute('onclick', 'isDone('+ item.id + '); return false;');

            let label = document.createElement('label');
            label.setAttribute('for', 'checkbox_' + item.id);
            label.setAttribute('class', 'checker');

        itemTDforCheckBox.appendChild(isDone);
        itemTDforCheckBox.appendChild(label);

        let itemTDforTodo = document.createElement('td');
            let todo = document.createElement('a')
            todo.innerHTML = item.description;
            todo.className = 'checkmark';
            todo.setAttribute('href', '#modify/' + item.id);
        itemTDforTodo.appendChild(todo);
        itemTDforTodo.setAttribute('class', 'todo-cell');


        let itemTDforDelete = document.createElement('td');
            let deleteButton = document.createElement('button')
            deleteButton.setAttribute('class', 'delete');
            deleteButton.setAttribute('onclick', 'deleteItem('+ item.id + ')');
        itemTDforDelete.appendChild(deleteButton);

        itemTR.appendChild(itemTDforCheckBox);
        itemTR.appendChild(itemTDforTodo);
        itemTR.appendChild(itemTDforDelete);

        itemTable.appendChild(itemTR);

        mainPage.appendChild(itemTable);
    });
    return mainPage;
}


rootNode.appendChild(prepareToDoItemsPage());
window.onhashchange = locationHashChanged;