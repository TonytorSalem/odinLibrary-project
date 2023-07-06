



let myLibrary = [];

function Book(title,author,pages,read) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function (){
    console.table(`${title} ${author} ${pages}`)
  }
}

// let habbit = new Book('16','Demoz Goshme',481)
// habbit.info()

Book.prototype.toggleRead = function (){
  this.read = !this.read;
}

function toggleRead(index){
  myLibrary[index].toggleRead()
  render()
}


function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector('#title').value
let author = document.querySelector('#author').value
let pages = document.querySelector('#pages').value
let read = document.querySelector('#read').checked
  let newBook = new Book(title,author,pages,read)
   myLibrary.push(newBook)
 render()
  
}

function render(){
  const libraryEl = document.querySelector('.library')
  libraryEl.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement('div')
    bookEl.innerHTML = `
    <div class="card-header">
  <h3 class="title">bookTitle : ${book.title}</h3>
  <h5 class="author">by : ${book.author}</h5>
</div>
<div class="card-body">
  <p>has ${book.pages} pages</p>
  <p class="read-status">${book.read?'read':'not read yet'}</p>
  <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
  <button class="toggle-read-btn" onclick='toggleRead(${i})'>Toggle</button>
</div>`
bookEl.setAttribute('class','book-card')
libraryEl.appendChild(bookEl)
    
  }


  
    
}


function removeBook(index){
  myLibrary.splice(index,1)
  render()
}

let newBookBtn = document.querySelector('.new-book-btn')

newBookBtn.addEventListener('click',function (){
    let newBookForm = document.querySelector('.new-book-form')
    newBookForm.style.display = 'flex'
})

document.querySelector('.new-book-form').addEventListener('submit',function (e){
  e.preventDefault();
  addBookToLibrary();

})