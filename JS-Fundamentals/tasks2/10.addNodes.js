//Use the appendChild method to add a node.
let pageNode = document.getElementById("page");
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "New paragraph added with appendChild method";
pageNode.appendChild(newParagraph);

//Use the insertBefore method to add a node.
let newHeading = document.createElement("h1");
newHeading.textContent = "New Heading added with insertBefore method";
pageNode.insertBefore(newHeading, pageNode.firstChild);

//Use the removeChild method to remove a node.
let contentNode = document.getElementById('content')
let removeParagraph = document.querySelector('#content :nth-child(2)')
contentNode.removeChild(removeParagraph);

//Use the replaceChild method to replace a node.
let newTitle = document.createElement("h2");
newTitle.textContent = "The Last Page Title";
contentNode.replaceChild(newTitle, contentNode.firstChild);