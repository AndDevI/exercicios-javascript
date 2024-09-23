const input = document.querySelector('input');
const list = document.querySelector('ul');
const btnDelete = document.querySelector('button');
let lastAddItem = null;

function addList(e) {
    if (e.key === 'Enter') {
        const inputValue = input.value.trim(); 

        if (inputValue === "") {
            return; 
        }

        const valueList = document.createElement('li');
        valueList.textContent = inputValue;

        const check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        check.classList.add(
            "ml-5",
            "align-middle"
        ); 

        valueList.appendChild(document.createTextNode(' '));
        valueList.appendChild(check);
        list.appendChild(valueList);

        input.value = ""; 
    }
}

input.addEventListener('keyup', addList);

function deleteList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild); 
    }
}

btnDelete.addEventListener('click', deleteList);
