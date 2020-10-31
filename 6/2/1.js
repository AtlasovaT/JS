let input = document.createElement('input');
input.className = 'input-value';
let button = document.createElement('button');
button.className = 'btn';
button.innerHTML = 'Вывести';
document.body.append(input);
document.body.append(button);
button.addEventListener('click', (e) => {
    e.preventDefault();
    let itemValue = document.querySelector('.input-value').value;
    console.log(itemValue);
})
