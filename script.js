/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const myLibrary = [];
const form = document.querySelector('.form');
const tableBody = document.querySelector('tbody');
const submit = document.querySelector('#sub');
const inputs = document.querySelectorAll('input');

function Book(author, title, numberOfPages, read) {
  this.author = author;
  this.title = title;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function loop() {
  const row = document.createElement('tr');
  const butt = document.createElement('button');
  butt.innerHTML = 'Remove';
  butt.setAttribute('class', 'btn btn-secondary mx-auto', 'type', 'button');
  butt.dataset.num = myLibrary.length - 1;
  tableBody.appendChild(row).innerHTML = `<td>${myLibrary[myLibrary.length - 1].author}</td>
         <td>${myLibrary[myLibrary.length - 1].title}</td>
         <td>${myLibrary[myLibrary.length - 1].numberOfPages}</td>
         <td>${myLibrary[myLibrary.length - 1].read}</td>`;
  row.appendChild(butt);
  document.querySelectorAll('[data-num]');
  // console.log(myLibrary[myLibrary.length - 1]);
}
// submit.addEventListener('click', addBookToLibrary, false);
form.addEventListener('submit', (event) => {
  event.preventDefault();
});
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
    loop();
    // form.style.display = 'none';
    // event.preventDefault();
    // return false;
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

console.log(document.querySelectorAll('[data-num]'));
document.querySelectorAll('[data-num]').forEach((elem) => elem.addEventListener('click', () => {
  let tabNum = elem.dataset.num;
  tabNum = Number(tabNum);
  myLibrary.splice(tabNum, 1);
  console.log(elem);
  console.log(elem.parentElement);
  elem.parentElement.remove();
  console.log(myLibrary);
}));
