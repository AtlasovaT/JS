let form = document.createElement("form");
form.setAttribute('action',"error.html");

let input = document.createElement("input");
input.type = "text";
input.value = "";

let button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";

form.appendChild(input);
form.appendChild(button);

let body = document.getElementsByTagName('body')[0];
body.appendChild(form);

let div = document.createElement("div");
div.id = "chat";
body.appendChild(div);

button.onclick = function() {
    div.innerText='';
    let appendDiv = document.createElement("div");
    appendDiv.innerText = input.value;
    div.appendChild(appendDiv);
    form.reset();
}
