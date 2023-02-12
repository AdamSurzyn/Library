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
    //when true 'read = yes, I've read this book" and the oposite when false
    this.info = function info() { 
        return `${title} written in year ${year}, by ${author} and has ${pages} pages. Was it read by me? Well ${read}.`
    }

}

function addBookToShelf(book){
    shelf.push(book)
}

let bookTitle = prompt("Please enter the title of the book", "The Hobbit")
let bookYear = prompt("Please enter the year in which the book was written", "1957")
let bookAuthor = prompt("Please enter the author of the book", "JRR Tolkien")
let bookPages = prompt("How many pages are there in this book?", "295")
let bookRead = prompt("Did you read it?", "false")

const theHobbit = new Book(bookTitle, bookYear, bookAuthor, bookPages, bookRead)

addBookToShelf(theHobbit)

//******************************************
//Now have to create a book html element for each book on the shelf. Then display it in the element itself
//******************************************

let bookaa = document.getElementsByClassName("Book")[0]


shelf.forEach(book =>{

    let bookProperties = Object.keys(book)

    
    bookProperties.forEach(property =>{

        let newchild = bookaa.appendChild(document.createElement('li'))
        newchild.innerHTML = book[property]

    }) 

})
