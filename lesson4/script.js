const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const dlt = document.createElement('button');

input.focus();

button.addEventListener('click', function() {
    if (!input.value) {
        return;
    }

    const dlt = document.createElement('button');

    const newItem = document.createElement('li');
    
    dlt.textContent = "❌";

    newItem.textContent = input.value;

    newItem.appendChild(dlt);

    list.appendChild(newItem);
    input.value = '';
    input.focus();

    dlt.addEventListener('click', function() {
        list.removeChild(newItem);
    });
});
input.focus();

