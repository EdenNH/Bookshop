'use strict'

console.log('main');

var gCurrRate = 0;


function init() {
    createBooks();
    var books = getBooks();
    console.log(books);
    // var booksListHtml = renderBooks(books) 
    renderBooks(books);
}

function renderBooks(books) {
    var strHtml = books.map(function (book) {
        return strHtml = `<tr>
                        <th scope="row">${book.id}</th>
                        <td><img src="${book.imgUrl}" height="50px" width="30px"/></td>
                        <td>${book.title}</td>
                        <td>${book.price}</td>
                        <td>
                            <button class="btn btn-primary" onclick="onReadBook('${book.id}')">Read</button>
                            <button type="button" class="btn btn-secondary" onclick ="onUpdateBook('${book.id}')">Update</button>
                            <button type="button" class="btn btn-success" onclick = "onDeleteBook('${book.id}')">Delete</button>
                        </td>
                    </tr>`
    })

   $('.books-list').html( strHtml.join(''))
}


function onDeleteBook(bookId){
    deleteBook(bookId);
}

function readAndAddNewBook() {
    var name = prompt('What is the name of the book?');
    var price = prompt('What is the price of the book?');
    addNewBook(name, price);
    renderBooks(gBooks);
}

function onUpdateBook(bookId) {
    updateBook(bookId);
    renderBooks(gBooks);
}

function onReadBook(bookId) {
    var book = getBookById(bookId);
    $('#bookModalCenter').modal('show');
    $('.modal-title').text(book.title);
    $('#book-img').attr('src', book.imgUrl);
    $('.price').text(book.price);
    $('.rate-txt').text(book.rate);
    $('.rate-change-container').attr('id', bookId);
}


function onRateUp() {
    var currRate;
    var id = $('.rate-change-container').attr('id');
    var book = getBookById(id);
    if (book.rate <= 9) {
        book.rate++;
        $('.rate-txt').text(book.rate);
        gCurrRate = book.rate
    }
}

function onRateDown() {
    var id = $('.rate-change-container').attr('id');
    var book = getBookById(id);
    if (book.rate > 0) {
        book.rate--;
        $('.rate-txt').text(book.rate);
        gCurrRate = book.rate
    }
}
