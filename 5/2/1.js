function Сountdown(seconds) {
    let current = seconds;

    setTimeout(function go() {
        console.log(current);
        current--;
        return (current >= 0) ? setTimeout(go, 1000) : console.log('Время вышло!');
    }, 1000);
}

Сountdown(5);

// доп
function Сountdown(seconds) {
    let current = seconds;
    if (current >= 0) {
        console.log(current);
        current--;
        setTimeout(Сountdown, 1000, current);
    } else {
        console.log('Время вышло!');
        clearTimeout(setTimeout(Сountdown, 1000, current));
    }

}

Сountdown(5);
