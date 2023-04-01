//Retrieve the value of a node using nodeValue.
let pageTitle = document.getElementById('title').firstChild.nodeValue;
console.log('pagetitle', pageTitle);

//Change the value of a node using nodeValue.
let pageTitleNode = document.getElementById('title').firstChild;
pageTitleNode.nodeValue = 'New Page Title';
console.log(pageTitleNode.nodeValue);

//Retrieve the value of a node attribute.
let nodeValue = document.getElementById('content').firstChild.nodeType;
console.log(nodeValue);

//Change the value of a node attribute.
let contentHeading = document.querySelector('#header h1');
contentHeading.setAttribute('class', 'newHeading');

console.log(contentHeading);


