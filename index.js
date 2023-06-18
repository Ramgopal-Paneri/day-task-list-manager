const inp = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.getElementById('list');
const showMessage = document.createElement('h2'); 
if(ul.children.length <= 0){
        showMessage.innerText = "Nothing is here,please add a Task!";
        ul.appendChild(showMessage); 
        showMessage.className ="text-center font-bold p-3 text-lg";
}
const add = (e) => {
    e.preventDefault();
    const inpValue = inp.value;
    if(inpValue == ""){
            return alert('nothing is written in input field,please add taskname');
        }
    if (ul.children[0].className == "text-center font-bold p-3 text-lg") {
        ul.children[0].remove();
    }   
    const checkElem = document.getElementsByTagName('li');
    for (let item of checkElem) {
        if (item.children[1].innerText == inpValue) {
            return alert("task already exists");
        }
    }
    const newli = document.createElement('li');
    newli.innerHTML = `<h1 class="font-mono font-bold text-lg ml-8"> ${inpValue}</h1>
<div>    <button onclick="editElement(this)"  type="button" class="editBtn mr-2 border-4 ml-8 bg-blue-100 text-black p-1 border-blue-400 rounded-lg hover:text-white hover:bg-black hover:border-white ">edit Task</button> 
<button  type="button" onclick="deleteElement(this)" class="  border-4  bg-slate-700 text-blue-50 p-1 border-blue-400 rounded-xl hover:text-white hover:bg-black hover:border-white justify-self-end">remove Task</button></div>`;
    ul.appendChild(newli);
     newli.className = "border-4 rounded-md border-slate-600 mt-1  w-screen p-2 flex flex-row justify-between";
};
btn.addEventListener('click', add)
btn.addEventListener('contextmenu', add)
const deleteElement = (elem) => {
let permision = confirm('did you want to delete task')
if(permision){   
    elem.parentElement.parentElement.remove()
}
    if(ul.children.length <= 0){
        showMessage.innerText = "Nothing is here,please add a Task!";
        ul.appendChild(showMessage); 
        showMessage.className ="text-center font-bold p-3 text-lg";
}   
}
const editElement = (elem) => {
    if(elem.innerText == "edit Task"){
        const targetElem = elem.parentElement.previousElementSibling;
    const parentforReplace = targetElem.parentElement;
   const inputForEdit = document.createElement('input');
   inputForEdit.type = 'text';
   inputForEdit.placeholder = 'enter task';
   inputForEdit.autofocus = true;
  inputForEdit.value = targetElem.innerText;
  parentforReplace.replaceChild(inputForEdit,targetElem);
  elem.innerText = "Done";
    }
   else{
    const targetElem = elem.parentElement.previousElementSibling;
    const parentforReplace = targetElem.parentElement;
    const headingAfterEdit = document.createElement('h1');
    headingAfterEdit.className = "font-mono font-bold text-lg ml-8";
    headingAfterEdit.innerText = targetElem.value;
    parentforReplace.replaceChild(headingAfterEdit,targetElem);
    elem.innerText = "edit Task";
}
}