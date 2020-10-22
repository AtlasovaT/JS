let calculator = {
    read() {
        this.firstNumber = +prompt('Первое число', 0);
        this.secondNumber = +prompt('Второе значение',0);
    },
    sum() {
        return this.firstNumber + this.secondNumber;
    },
    mul() {
        return this.firstNumber * this.secondNumber;
    }
};
calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );
