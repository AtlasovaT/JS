for (let li of document.querySelectorAll('li')) {
    let title = li.firstChild.data;
    console.log(title);
}
console.log(document.getElementsByTagName('li').length);
