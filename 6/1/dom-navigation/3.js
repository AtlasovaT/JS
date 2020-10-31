let table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows.length; j++) {
        if (i == j) {
            let td = table.rows[i].cells[j];
            td.style.backgroundColor = 'red';
        }
    }
}
