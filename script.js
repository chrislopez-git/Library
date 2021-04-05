function Book(title, author, pages, read){
    console.log("book constructor activated");
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        //const info = this.title + ", " + this.author + ", " + this.pages + ", " + this.read;
        const info = "Title: " + this.title + ", Author: " + this.author + ", Pages:" + this.pages + ", Read:" + this.read;
        return info; 
    };
    
};


let myLibrary = [];


// function to the script (not the constructor) that can take user’s input and store the new book objects into an array.
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);

    return true;
}


// Write a function that loops through the array and displays each book on
//  the page. You can display them in some sort of table, or each on their own
//   “card”. It might help for now to manually add a few books to your array so
//    you can see the display.

function arrayToFlex(myLibrary){

    const gridChild = document.createElement("div");
    gridChild.classList = "class";
    gridChild.addEventListener("mouseover", changeColor);
    mainContainer.appendChild(gridChild);
}

function displayArray(myLibrary){
    clearGrid();
    for (x in myLibrary) {
        console.log(myLibrary[x].title);
    }
    fillGrid(12);

}

// from etch a sketch for ref
function clearGrid(){
    // create array from childnodes (grid elements)
    const gridArray = Array.from(mainContainer.childNodes);
    gridArray.forEach((element) => {
        mainContainer.removeChild(element);
    });

}
function fillGrid(size) {
    
    for (x in myLibrary) {
        console.log(myLibrary[x].title);
        const gridChild = document.createElement("div");
        gridChild.classList = "card";
        //gridChild.textContent = myLibrary[x].info();
        mainContainer.appendChild(gridChild);
        
        // book title div
        const gridChildTitle = document.createElement("div");
        gridChildTitle.classList = "bookInfo";
        gridChildTitle.textContent = "Title: " + myLibrary[x].title;
        gridChild.appendChild(gridChildTitle);

        // author div
        const gridChildAuthor = document.createElement("div");
        gridChildAuthor.classList = "bookInfo";
        gridChildAuthor.textContent = "Author: " + myLibrary[x].author;
        gridChild.appendChild(gridChildAuthor);

        // pages div
        const gridChildPages = document.createElement("div");
        gridChildPages.classList = "bookInfo";
        gridChildPages.textContent = "Pages: " + myLibrary[x].pages;
        gridChild.appendChild(gridChildPages);

        // read div
        const gridChildRead = document.createElement("div");
        gridChildRead.classList = "bookInfo";
        gridChildRead.textContent = "Read Status: " + myLibrary[x].read;
        gridChild.appendChild(gridChildRead);

        
    }

}


document.getElementById("add").addEventListener("click", function() {
    document.getElementById("add").innerHTML = "change the text!";

  });

// test array objects
const book1 = new Book("book1", "elvis", 100, "rocks");
console.log(book1.info());
console.log(book1.info());
addBookToLibrary(book1);
console.log(myLibrary[0].info());

const book2 = new Book("book2", "brandon", 100, "rocks");
addBookToLibrary(book2);
const book3 = new Book("book3", "chris", 100, "yoo");
addBookToLibrary(book3);

displayArray(myLibrary);