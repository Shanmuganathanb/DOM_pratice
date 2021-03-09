const myForm = document.querySelector('#my-form');
const nameIn = document.querySelector('#name');
const emailIn = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
// myForm.addEventListener('mouseover', onMouseOver);
// myForm.addEventListener('mouseout', onMouseOut);

function onSubmit(e){
    e.preventDefault();
    console.log(nameIn.value);
    console.log(emailIn.value)
    if(nameIn.value === '' || emailIn.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(), 3000);
    } else{
        localStorage.setItem(`${localStorage.length}`, `${nameIn.value} : ${emailIn.value}`);
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameIn.value} : ${emailIn.value}`));
        userList.appendChild(li);
        
        nameIn.value = '';
        emailIn.value = '';
    }
}
window.addEventListener('DOMContentLoaded', (e)=>{
    console.log(window.localStorage.length); 
    for (var i = 0; i < localStorage.length; i++){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(localStorage.getItem(localStorage.key(i))))
        userList.appendChild(li);
    }
});
function onMouseOut(e){
    console.log(e.target);
}
function onMouseOver(e){
    console.log(e.target);
}
