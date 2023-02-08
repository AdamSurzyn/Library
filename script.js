/*
***TO DO******************************
1)Add function that will take users input and store the input books into shelf array
2)Wite a function that loops through the array and displays each book on the page
3)Add a 'new book' button taht brings up a form and allows users to input details for the book they want to add.
4)Add a button that will remove the book from display
5)Add a button on a book that will change its display status
**************************************
*/



let shelf = []

function Book(title, year, author, pages, read){
    this.title = title
    this.year = year
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function info() { 
        return `${title} written in year ${year}, by ${author} and has ${pages} pages. Was it read by me? Well ${read}.`
    }

}

function addBookToShelf(book){
    shelf.push(book)
}

const theHobbit = new Book("The Hobbit", "1957", "JRR Tolkien", "295", true)

addBookToShelf(theHobbit)

console.log(theHobbit.info())
console.log(shelf)