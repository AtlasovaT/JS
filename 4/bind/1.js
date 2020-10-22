function f() {
    alert( this ); // null
}

let user = {
    g: f.bind(null)
};

user.g();
// null или window в браузере, так как исходная функция вызывается с this=null
