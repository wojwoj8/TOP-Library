/* eslint-disable no-console */
const myLibrary = [];
const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');
const submit = document.querySelector('#sub');
const inputs = document.querySelectorAll('input');
const row = document.createElement('tr');
const butt = document.createElement('button');

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

Book.prototype.info = function () {
  let readStatus;
  if (this.read === false) {
    readStatus = 'not read yet';
  } else {
    readStatus = 'has been read';
  }
  console.log(`${this.title} by ${this.author} ${this.numberOfPages} pages ${readStatus}`);
};

function addBookToLibrary() {
  // eslint-disable-next-line consistent-return
  submit.addEventListener('click', () => {
    console.log('test');
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;
    let number = document.querySelector('input[name="number"]').value;
    number = Number(number);
    const read = document.querySelector('#read').value;
    console.log(typeof number);
    if (author === '' || title === '' || typeof number !== 'number' || number <= 0) {
      return false;
    }
    console.log(author, title, number, read);
    // to clear input field after creating element
    inputs.forEach((inp) => {
      // eslint-disable-next-line no-param-reassign
      inp.value = '';
    });
    const book = new Book(author, title, number, read);
    console.log('stworzono obiekt');

    myLibrary.push(book);
  });
}

document.querySelector('#add').addEventListener('click', addBookToLibrary());
myLibrary.push(new Book('Tolkien', 'Hobbit', 342, false));
myLibrary.push(new Book('J.R.R. Tolkien', 'TLoTR', 1242, true));
