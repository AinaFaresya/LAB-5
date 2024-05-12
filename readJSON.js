const fs = require('fs');

// Read the JSON file
fs.readFile('book.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data
  const bookData = JSON.parse(data);

  // Access the information of the first student
  // const title = bookData.Book[0].title;
  // const author = bookData.Book[0].author;
  // const publicationYear = bookData.Book[0].publicationYear;
  // const genres = bookData.Book[0].genres;

  // Print the information
  // console.log("Title:", title);
  // console.log("Author:", author);
  // console.log("Publication Year":", publicationYear);
  // console.log("Genres:", genres);

  // Access and print the information of all students
  bookData.Book.forEach(element => {

    console.log("Book:", element);
    
  });
});