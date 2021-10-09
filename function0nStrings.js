// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bkbk,bookName) {
  var book1 = bkbk.concat(bookName);
  return book1;
  
  // Change code above this line
}

// Change code below this line
function remove (bkbk,bookName) {
  var book_index = boklst.indexOf(bookName);
  if (book_index >= 0) {

    bkbk.splice(book_index, 1);
    return bkbk;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);