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
myLibrary.push(book1);
console.log(myLibrary);