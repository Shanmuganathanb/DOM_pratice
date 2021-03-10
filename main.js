const myForm = document.querySelector('#my-form');
const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
document.getElementById("users").addEventListener('click', onEditDelBtn);
function onSubmit(e){
    e.preventDefault();
    if(nameIn.value === '' || emailIn.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(), 3000);
    } else{
        user_details={
            name: `${nameIn.value}`,
            email: `${emailIn.value}`
        }
        localStorage.setItem(`${emailIn.value}`, JSON.stringify(user_details));
        const li = document.createElement('li');
        li.setAttribute("id",`${emailIn.value}`);
        li.appendChild(document.createTextNode(`name : ${nameIn.value} ; email : ${emailIn.value}`));
        const edit = document.createElement("button");
        const del = document.createElement("button");
        edit.innerText="Edit";
        del.innerText="Delete";
        edit.classList.add("sub-btn");
        del.classList.add("sub-btn");
        li.appendChild(edit);
        li.appendChild(del);
        
        userList.appendChild(li);
        nameIn.value = '';
        emailIn.value = '';
    }
}
window.addEventListener('DOMContentLoaded', (e)=>{
    var arrayval = Object.keys(localStorage);
    for (var i in arrayval){
        var obj = JSON.parse(localStorage.getItem(arrayval[i]));
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`name : ${obj.name} ; email : ${obj.email}`));
        var edit = document.createElement("button");
        edit.innerText="Edit";
        edit.classList.add("sub-btn");
        li.appendChild(edit);
        var del = document.createElement("button");
        del.innerText="Delete";
        del.classList.add("sub-btn");
        li.appendChild(del);
        li.setAttribute("id",`${obj.email}`);
        userList.appendChild(li);
    }
});
function onEditDelBtn(e){
    e.preventDefault();
    console.log(e.target);
    if (e.target.innerText=="Edit"){
        var obj = JSON.parse(localStorage.getItem(e.target.parentNode.id));
        nameIn.value = `${obj.name}`;
        emailIn.value = `${obj.email}`;
        localStorage.removeItem(obj.email);
        e.target.parentNode.remove();
    }
    else if (e.target.innerText=="Delete"){
        var obj = JSON.parse(localStorage.getItem(e.target.parentNode.id));
        localStorage.removeItem(obj.email);
        e.target.parentNode.remove();
    }
}
// document.querySelector(".sub-btn").addEventListener('click',(e)=>{
//     console.log(e.target.innerHTML);
//     if(e.target.innerText=="Edit"){
//         e.preventDefault();
//         var id_now = e.target.parentNode.id;
//         console.log(id_now);
//         var obj = JSON.parse(`${localStorage.getItem(id_now)}`);
//         nameIn.value = `${obj.name}`;
//         emailIn.value = `${obj.email}`;
//     }
// });
// document.querySelector(".sub-btn").addEventListener('click',onEditClick);
// document.addEventListener('click',(e)=>{
//     var id_now = e.target.parentNode.id;
    
// });

// function onMouseOut(e){
//     console.log(e.target);
// }
// function onMouseOver(e){
//     console.log(e.target);
// }
