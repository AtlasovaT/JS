let user = {
    name: "Василий Иванович",
    age: 35
};
let object = JSON.parse(JSON.stringify(user));
console.log(object);
