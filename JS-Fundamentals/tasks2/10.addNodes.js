//Use the appendChild method to add a node.
let pageNode = document.getElementById("page");
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph added with appendChild method";
pageNode.appendChild(newParagraph);

//Use the insertBefore method to add a node.
let newHeading = document.createElement("h2");
newHeading.textContent = "New Heading added with insertBefore method";
let firstChild = pageNode.firstChild;
pageNode.insertBefore(newHeading, firstChild);

//Use the removeChild method to remove a node.
let contentNode = document.getElementById("content");
let paragraphToRemove = contentNode.lastChild;
contentNode.removeChild(paragraphToRemove);

//Use the replaceChild method to replace a node.
let titleNode = document.getElementById("title");
let newTitle = document.createElement("h1");
newTitle.textContent = "New Page Title";
pageNode.replaceChild(newTitle, titleNode);