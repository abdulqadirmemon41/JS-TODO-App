const todoItem = document.getElementById('todo-item');
const list = document.getElementById('list') 

const addItem = document.getElementById('add-item')
const deleteAll = document.getElementById('delete-all')

addItem.addEventListener('click',() => {

    if(todoItem.value !== ""){

    //creating li and input & appendding it
    let li = document.createElement('li');

    let input = document.createElement('input')
    input.type = 'text';
    input.value = todoItem.value;
    input.disabled = true;
    input.setAttribute('onblur','editableFalse(this)')
    input.setAttribute('class','mr-2')
    li.appendChild(input);


    //old code 
    // let liText = document.createTextNode(todoItem.value);
    // input.appendChild(todoItem.value)
    // li.appendChild(liText);


    //creating Edit button and appending it, calling functon to it also
    let editBtn = document.createElement('button')
    let editText = document.createTextNode('EDIT')
    editBtn.appendChild(editText);
    li.appendChild(editBtn);
    
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.setAttribute('class','mr-2 btn btn-dark')

    //create Delete button and appending it, calling function to it also
    let delBtn = document.createElement('button')
    let detText = document.createTextNode('DELETE')
    delBtn.appendChild(detText);
    li.appendChild(delBtn)

    delBtn.setAttribute('onclick','deleteItem(this)');
    delBtn.setAttribute('class','btn btn-danger')

    //append the li to the ul
    list.appendChild(li)

    todoItem.value = "";
    }
    else{
        alert('TODO item can not be empty')
    }

    
});


function editItem(e){
    //enable the input 
    e.parentNode.childNodes[0].disabled = false;

    // let val = prompt("Enter updated value here..",e.parentNode.childNodes[0].nodeValue);
    // e.parentNode.childNodes[0].nodeValue = val;

}


function deleteItem(e){
    var conf = confirm('Are yor Sure to DELETE?')
    if(conf === true){
        e.parentNode.remove();
    }
     
}

deleteAll.addEventListener('click',() => {

    var conf = confirm('Are yor Sure to DELETE ALL?')
    if(conf === true){
        list.innerHTML = "";
    }    
})

function editableFalse(e){
    e.disabled = true;
}

