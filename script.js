/* eslint-disable no-plusplus */
/* eslint-disable no-console */
const myLibrary = [];
const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');
const submit = document.querySelector('#sub');
const inputs = document.querySelectorAll('input');
const butt = document.createElement('button');
const parent = document.querySelector('tbody');

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

Book.prototype.info = function () {
  let readStatus;
  if (this.read === 'False') {
    readStatus = 'not read yet';
  } else {
    readStatus = 'has been read';
  }
  // console.log(`${this.title} by ${this.author} ${this.numberOfPages} pages ${readStatus}`);
};

function loop() {
  let i = 0;
  removeTable();
  for (i; i < myLibrary.length; i++) {
    butt.dataset.num = i;
    tableBody.appendChild(document.createElement('tr')).innerHTML = `<td>${myLibrary[i].author}</td>
    <td>${myLibrary[i].title}</td>
    <td>${myLibrary[i].numberOfPages}</td>
    <td><button class="btn btn-secondary mx-auto" id="readButton" data-attribute = ${i}>${myLibrary[i].read}</button></td>
    <td><button class="btn btn-secondary mx-auto" id="remove" data-attribute = ${i}>Remove</button></td>`;

    // console.log(myLibrary[i]);
  }
  readButton();
  removeBook();
}
// submit.addEventListener('click', addBookToLibrary, false);
form.addEventListener('submit', (event) => {
  event.preventDefault();
});

function addBookToLibrary() {
  // eslint-disable-next-line consistent-return
  submit.addEventListener('click', () => {
    // console.log('test');
    const author = document.querySelector('input[name="author"]').value;
    const title = document.querySelector('input[name="title"]').value;
    let number = document.querySelector('input[name="number"]').value;
    number = Number(number);
    const read = document.querySelector('#read').value;
    // console.log(typeof number);
    if (author === '' || title === '' || typeof number !== 'number' || number <= 0) {
      return false;
    }
    // console.log(author, title, number, read);
    // to clear input field after creating element
    inputs.forEach((inp) => {
      // eslint-disable-next-line no-param-reassign
      inp.value = '';
    });
    const book = new Book(author, title, number, read);
    // console.log('stworzono obiekt');

    myLibrary.push(book);
    loop();
  });
}
function getRemButt() {
  const r = document.querySelectorAll('#remove');
  return r;
}
function removeTable() {
  const r = getRemButt();
  r.forEach((e, index) => {
    // console.log(index);
    r[index].parentElement.parentElement.remove();
  });
}
function removeBook() {
  const r = getRemButt();
  r.forEach((e, index) => e.addEventListener('click', () => {
    // console.log(index);
    r[index].parentElement.parentElement.remove();
    myLibrary.unshift(myLibrary.splice(index, 1)[0]);
    myLibrary.shift();
    while (parent.firstChild) {
      parent.firstChild.remove();
    }
    // console.log('test');
    loop();
    // removeBook();
  }));
}

function readButton() {
  const button = document.querySelectorAll('#readButton');
  button.forEach((e, index) => e.addEventListener('click', () => {
    if (e.innerHTML === 'False') {
      e.innerHTML = 'True';
      myLibrary[index].read = 'True';
    } else {
      e.innerHTML = 'False';
      myLibrary[index].read = 'False';
    }
    loop();
  }));
}

document.querySelector('#add').addEventListener('click', addBookToLibrary());
myLibrary.push(new Book('Tolkien', 'Hobbit', 342, 'False'));
myLibrary.push(new Book('J.R.R. Tolkien', 'TLoTR', 1242, 'True'));
myLibrary.push(new Book('Tesr', 'asd', 1234, 'False'));
loop();
// removeBook();
