/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const myLibrary = [];
const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function loop() {
  for (let i = 0; i < myLibrary.length; i++) {
    tableBody.appendChild(document.createElement('tr')).innerHTML = `<td>${myLibrary[i].author}</td>
         <td>${myLibrary[i].title}</td>
         <td>${myLibrary[i].numberOfPages}</td>
         <td>${myLibrary[i].read}</td>`;
    console.log(myLibrary[i]);
  }
}
function addBookToLibrary() {
  document.querySelector('#sub').addEventListener('click', () => {
    console.log('test');
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const read = document.querySelector('#read').value;
    const book = Object.create(Book(author, title, number, read));

    myLibrary.push(book);
    loop();
    form.style.display = 'none';
  });
}

document.querySelector('#add').addEventListener('click', addBookToLibrary());
const book1 = new Book('autor', 'ksiazka', '2137', 'True');
const book2 = new Book('autodfsr', 'ksiazasdka', '21', 'False');
myLibrary.push(book1);
myLibrary.push(book2);
// console.log(myLibrary);

loop();
