/*
***TO DO******************************
4)Add a button that will remove the book from display
5)Add a button on a book that will change its display status
**************************************
*/



let shelf =[]

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

    // this.remove = function remove(i){
    //     document.getElementById(i).remove
    // }
}

function addBookToShelf(book){
    shelf.push(book)
}

function addBooksToSite(shelf){

    let booksContainer = document.getElementsByClassName("BooksCollectionContainer")[0]

    shelf.forEach((book, i) =>{

        let appendedBook = booksContainer.appendChild(document.createElement('div'))
        appendedBook.className = `Book ${i.toString()}`
        let newBook = booksContainer.getElementsByClassName(`Book ${i.toString()}`)[0]
        let bookProperties = Object.keys(book)
    
        
        bookProperties.forEach(property =>{
    
            let newchild = newBook.appendChild(document.createElement('li'))
            newchild.innerHTML = book[property]
    
        }) 
    
    })
}

function addBook(book){

    addBookToShelf(book)

    let booksContainer = document.getElementsByClassName("BooksCollectionContainer")[0]
    let i = booksContainer.childElementCount
    let appendedBook = booksContainer.appendChild(document.createElement('div'))
    appendedBook.className = `Book ${i.toString()}`
    let newBook = booksContainer.getElementsByClassName(`Book ${i.toString()}`)[0]
    let bookProperties = Object.keys(book)
    appendedBook.id = i
    addDeleteButton(newBook, i)

    bookProperties.forEach(property =>{

        let newchild = newBook.appendChild(document.createElement('li'))
        newchild.innerHTML = book[property]

    }) 
}

function addDeleteButton(e, i){
    let button = document.createElement("button")
    button.innerHTML = "Remove Book"
    button.className = `RemoveBook ${i}`
    e.appendChild(button)
    button.addEventListener("click", function(e){
        let target = e.currentTarget
        target.parentNode.remove()
        console.log("Removed a book!")
    })
}

document.getElementsByClassName("BookInputContainer")[0].addEventListener("submit", function (e){

    e.preventDefault()
    const formData = new FormData(e.target)
    const book = Object.fromEntries(formData)
    addBook(book)
    console.log("Added a book!")

})


