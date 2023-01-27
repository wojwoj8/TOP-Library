/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const myLibrary = [];
const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');
const submit = document.querySelector('#sub');

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function loop() {
  tableBody.appendChild(document.createElement('tr')).innerHTML = `<td>${myLibrary[myLibrary.length - 1].author}</td>
         <td>${myLibrary[myLibrary.length - 1].title}</td>
         <td>${myLibrary[myLibrary.length - 1].numberOfPages}</td>
         <td>${myLibrary[myLibrary.length - 1].read}</td>`;
  console.log(myLibrary[myLibrary.length - 1]);
}
// submit.addEventListener('click', addBookToLibrary, false);
function addBookToLibrary() {
  submit.addEventListener('click', () => {
    console.log('test');
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;
    const number = document.querySelector('input[name="number"]').value;
    const read = document.querySelector('#read').value;
    console.log(author, title, number, read);
    const book = Object.create(Book(author, title, number, read));
    console.log('stworzono obiekt');

    myLibrary.push(book);
    loop();
    // form.style.display = 'none';
    // event.preventDefault();
    return false;
  });
}

document.querySelector('#add').addEventListener('click', addBookToLibrary());

// const book1 = new Book('autor', 'ksiazka', '2137', 'True');

if ((myLibrary.length) === 0) {
  const book1 = new Book('autor', 'ksiazka', '2137', 'True');
  console.log('dzoa;a');
  myLibrary.push(book1);
  loop();
}

// console.log(myLibrary.length);
// const book2 = new Book('autodfsr', 'ksiazasdka', '21', 'False');
// myLibrary.push(book2);
// console.log(myLibrary);

// loop();
