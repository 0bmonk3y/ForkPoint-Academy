//Retrieve the value of a node using nodeValue.
let pageTitle = document.getElementById('title').firstChild.nodeValue;
console.log(pageTitle);

//Change the value of a node using nodeValue.
let pageTitleNode = document.getElementById('title').firstChild;
pageTitleNode.nodeValue = 'New Page Title';
console.log(pageTitleNode.nodeValue);

//Retrieve the value of a node attribute.
let contentDivId = document.getElementById('content').getAttribute('id');
console.log(contentDivId);

//Change the value of a node attribute.
let contentHeading = document.querySelector('#content h2');
contentHeading.setAttribute('id', 'newHeading');

console.log(contentHeading.getAttribute('id'));


