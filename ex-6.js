let favoriteBooks = [];

function addFavoriteBook(bookName) {
  // Start coding here !
  // ตรวจสอบว่าชื่อหนังสือมีคำว่า "Beauty" หรือไม่
  if (bookName.includes("Beauty")) {
    favoriteBooks.push(bookName);
  }
}

// Example case
addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts"); 
addFavoriteBook("The Beauty of Living Twice"); //add
addFavoriteBook("Black Beauty"); //add
addFavoriteBook("Monstrous Beauty"); //add

console.log(favoriteBooks); //["The Beauty of Living Twice", "Black Beauty", "Monstrous Beauty"]
