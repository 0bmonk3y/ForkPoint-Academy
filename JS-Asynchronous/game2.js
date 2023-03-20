// Define the variables for the game elements
const box = document.getElementById("box");
const topLine = document.getElementById("top-line");
const leftLine = document.getElementById("left-line");
const rightLine = document.getElementById("right-line");
const infoContainer = document.getElementById("info-container");

// Define the initial position of the box
let boxPosition = {
  top: 250,
  left: 350,
};

// Function to update the position of the box
function updateBoxPosition() {
  box.style.top = boxPosition.top + "px";
  box.style.left = boxPosition.left + "px";
}

// Function to handle the custom event
function handleLineReached(event) {
  const line = event.detail.line;
  const message = `Box reached ${line} line.`;
  infoContainer.innerHTML = message;
}

// Add event listeners to the arrows
document.getElementById("arrow-top").addEventListener("click", function () {
  boxPosition.top -= 50;
  updateBoxPosition();
  if (boxPosition.top <= 0) {
    const event = new CustomEvent("line-reached", { detail: { line: "top" } });
    document.dispatchEvent(event);
  }
});

document.getElementById("arrow-bottom").addEventListener("click", function () {
  boxPosition.top += 50;
  updateBoxPosition();
});

document.getElementById("arrow-left").addEventListener("click", function () {
  boxPosition.left -= 50;
  updateBoxPosition();
  if (boxPosition.left <= 0) {
    const event = new CustomEvent("line-reached", { detail: { line: "left" } });
    document.dispatchEvent(event);
  }
});

document.getElementById("arrow-right").addEventListener("click", function () {
  boxPosition.left += 50;
  updateBoxPosition();
  if (boxPosition.left >= 700) {
    const event = new CustomEvent("line-reached", { detail: { line: "right" } });
    document.dispatchEvent(event);
  }
});

// Add event listener for the custom event
document.addEventListener("line-reached", handleLineReached);
