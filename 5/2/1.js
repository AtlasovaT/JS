function Сountdown(seconds) {
    let current = seconds;

    setTimeout(function go() {
        console.log(current);
        current--;
        return (current >= 0) ? setTimeout(go, 1000) : console.log('Время вышло!');
    }, 1000);
}

Сountdown(5);
