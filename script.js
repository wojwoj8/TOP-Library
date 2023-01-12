let myLibrary = [];

function Book(author, title, numberOfPages, read){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read

}

function addBookToLibrary(){
    //fds
}
const book1 = new Book('autor', 'ksiazka', "2137", 'True');
const book2 = new Book('autodfsr', 'ksiazasdka', "21", 'False');
myLibrary.push(book1);
myLibrary.push(book2);
//console.log(myLibrary);
const tableBody = document.querySelector('tbody');

for (let i = 0; i < myLibrary.length; i++){
    tableBody.appendChild(document.createElement('tr')).innerHTML = 
        `<td>${myLibrary[i].author}</td>
         <td>${myLibrary[i].title}</td>
         <td>${myLibrary[i].numberOfPages}</td>
         <td>${myLibrary[i].read}</td>`;
    console.log(myLibrary[i])
}