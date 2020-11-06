/**
 * Задание 1
 *
 * Написать функцию modifyArticle, которая принимает на входе уже выбранный элемент статьи.
 * Функция должна поменять дату публикации статьи на текущую, а также подкрашивать заголовок в красный цвет
 * @param element {jQuery|HTMLElement}
 */
function modifyArticle(element) {
    let article__pubdate = $(element).find('.article__pubdate');

    let nowDate = new Date();
    let currDay = nowDate.getDate().toString().replace( /^([0-9])$/, '0$1' );
    let currMonth = nowDate.getMonth() + 1;
    currMonth = currMonth.toString().replace( /^([0-9])$/, '0$1' );
    let currYear = nowDate.getFullYear();

    article__pubdate.text(currDay + "." + currMonth + "." + currYear);

    let header = $(element).find('header');
    header.css("background-color","#f12828");
}

/**
 * Задание 2
 * Написать функцию createArticleTpl, которая принимает четыре параметра и возвращает шаблон по аналогии статьи
 * @param title {string} - Название статьи
 * @param text {string} - текст статьи
 * @param author {string} - автор статьи
 * @param date {Date} - дата публикации
 * @returns {jQuery|HTMLElement}
 */
function createArticleTpl(title, text, author, date) {
    let newArticle;
    newArticle = $('<article>',{
        'class':'card mb-2'
    });

    let header = $('<header>',{
        'class':'card-header',
        'text':title
    });

    let body = $('<div>',{
        'class':'card-body'
    });
    body.append($('<p>',{
        'class':'card-text',
        'text':text
    }));

    let footer = $('<footer>',{
        'class':'card-footer'
    });
    let card_text = $('<p>',{'class':'card-text','text':author+' '}).append($('<small>',{'class':'article__pubdate text-muted','text':date}));
    let small = $('<small>',{'text':'Likes: '}).append($('<button>',{'class':'btn btn-sm btn-primary','title':'Add like!','text':0}));
    footer.append(card_text);
    footer.append(small);

    newArticle.append(header);
    newArticle.append(body);
    newArticle.append(footer);

    return newArticle
}

/**
 * Задание 3
 * Написать функцию initForm, которая будет производить инициализацию обработки формы
 * Сделать обработку форму добавления новой статьи.
 * При заполнении формы и нажатии на кнопку "add article" новая статья должна вставляться в начало блока списка статей,
 * использовать ранее написанную функцию createArticleTpl
 * @param selector {string} - селектор формы
 */
function initForm(selector) {
    $(selector).submit(function(e){
        e.preventDefault();
        let articleName = $(this).find('#article-name').val();
        let articleText = $(this).find('#article-text').val();
        let articleAuthor = $(this).find('#article-author').val();

        let nowDate = new Date();
        let currDay = nowDate.getDate().toString().replace( /^([0-9])$/, '0$1' );
        let currMonth = nowDate.getMonth() + 1;
        currMonth = currMonth.toString().replace( /^([0-9])$/, '0$1' );
        let currYear = nowDate.getFullYear();
        let currDate = currDay + "." + currMonth + "." + currYear;

        let newArticle = createArticleTpl(articleName,articleText,articleAuthor,currDate).css('display','none');
        $('.row .col.col-9').prepend(newArticle);
        newArticle.slideDown();
        return false;
    });
}

/**
 * Задание 4
 * Доработать код:
 * При добавлении статьи - новая статья должна плавно появляться при добавлении
 * Раскоментировать кнопку  <button class="btn btn-primary" id="show-form-block">show form</button>,
 * при клике по ней форма должна показываться/скрываться
 **/

/**
 * Задание 5
 * Подключение функционала "лайков"
 * Сделать, чтобы при клике по кнопке add-like счетчик лайков (текст кнопки) увеличивался на
 * @param element - кнопка
 */
function addLike(element) {
    let currentValue = Number($(element).text());
    console.log(currentValue);
    $(element).text(currentValue+1);
}


$(document).ready(function() {
    $(document).on('click','article',function(){
        modifyArticle(this);
    });
    initForm('form');
    $(document).on('click','#show-form-block',function(){
        let formContainer = $('.col.col-3 .card');
        if (formContainer.css('display') == 'none')
        {
            formContainer.slideDown();
        }
        else
        {
            formContainer.slideUp();
        }
    });
    $(document).on('click','article .btn',function(){
        addLike(this);
    });
});
