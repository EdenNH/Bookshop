'use strict'

console.log('book service');
const BOOKS_KEY = 'books';
const BOOK_KEY = 'book';

var gBooks;



function createBook(title, price, img) {
    return {
        id: makeId(),
        title: title,
        price: price,
        imgUrl: img
    }
}

function createBooks() {
    if (localStorage.books) gbooks = getFromStorage(BOOKS_KEY);
    else gBooks = [
        createBook( 'NoLaw','14$','img/nolaw.jpg' ),
        createBook( '1984','15$','img/1984.jpg' ),
        createBook( 'The Little Prince', '30$', 'img/prince.jpg')
    ]
}

function getBooks(){
    return gBooks;
}

function deleteBook(bookId){
    var bookIdx = gBooks.findIndex(function (book){
        return book.id === bookId;
    })
    gBooks.splice(bookId, 1);
    renderBooks(gBooks);
}

function addNewBook(title, price) {
    var newBook = createBook(title, price, '');
    gBooks.push(newBook); 
}

function updateBook(bookId) {
    var newPrice = prompt('What is the new price?');
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId
    })
    gBooks[bookIdx].price = newPrice;
}



function getBookById(id) {
    var book = gBooks.find(function (book) {
        return book.id === id;
    });
    return book;
}


