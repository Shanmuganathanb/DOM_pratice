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
    if(nameIn.value === '' || emailIn.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=> msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameIn.value} : ${emailIn.value}`));
        userList.appendChild(li);
        // Clear fields
        nameIn.value = '';
        emailIn.value = '';
    }
}
function onMouseOut(e){
    console.log(e.target);
}
function onMouseOver(e){
    console.log(e.target);
}
