document.getElementById('nickname').textContent = 'The Frog';
document.getElementById('favorites').textContent = 'Shrek, JS, Hipies';
document.getElementById('hometown').textContent = 'Far, far away';
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
   items[i].className = 'list-item';
}

var newPhoto = document.createElement('img');
     newPhoto.src = 'https://static6.depositphotos.com/1036149/590/i/600/depositphotos_5907962-stock-photo-cool-frog.jpg';
      document.body.appendChild(newPhoto);