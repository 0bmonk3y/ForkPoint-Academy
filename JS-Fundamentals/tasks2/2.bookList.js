var books = [
    {title: "Ender's Game",
     img: 'https://assets2.chitanka.info/thumb/book-cover/04/1116.250.jpg',
     author: 'Orson Scott Card',
     alreadyRead: true
    },
    {title: "Dune",
     img: 'https://assets2.chitanka.info/thumb/book-cover/03/971.250.jpg',
     author: 'Frank Patrick Herbert',
     alreadyRead: false
    }];

var bookList = document.createElement('ul');

  for (var i = 0; i < books.length; i++) {
    var bookItem = document.createElement('li');
    var bookImg = document.createElement('img');
    bookImg.src = books[i].img;
    bookItem.appendChild(bookImg);
    var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
    bookItem.appendChild(bookDescription);
    
    if (books[i].alreadyRead) {
      bookItem.style.color = 'grey';
    }

    bookList.appendChild(bookItem);
  }
  
document.body.appendChild(bookList);