function makeUser() {
    return {
        name: "Джон",
        ref() {
            return this;
        }
    };
};

let user = makeUser();

alert( user.ref().name );
// была ошибка, так как makeUser() была вызвана как функция, а не как метод
