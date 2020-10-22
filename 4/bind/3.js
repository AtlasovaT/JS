function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); //  Результатом работы bind является другой объект. Bound function запоминает контекст только во время создания
