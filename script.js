const container = document.querySelector("#container")
const content = document.createElement("div")

content.classList.add("content")
content.textContent = "This was added via Javascript";

container.appendChild(content)

const redText = document.createElement("div")
redText.classList.toggle("redText")
redText.style.color = "red";
redText.textContent = "Hey I am Red!";

const blueHeader3 = document.createElement("div")
blueHeader3.classList.toggle("blueHeader3")
blueHeader3.style.color = "blue";
blueHeader3.textContent = "Hey I am Blue!"

const blackBox = document.createElement("div")
blackBox.classList.toggle("blackBox")
blackBox.setAttribute("style", "border: 4px solid black; backgroundColor: pink;")

const headerInsideBlackBox = document.createElement("h1")
headerInsideBlackBox.classList.toggle("headerInsideBlackBox")
headerInsideBlackBox.style.color = "black";
headerInsideBlackBox.textContent = "This is the header inside the box";

const textInsideBlackBox = document.createElement("p")
textInsideBlackBox.classList.toggle("textInsideBlackBox")
textInsideBlackBox.style.color = "black";
textInsideBlackBox.textContent = "This is the new text in the box";

blackBox.appendChild(headerInsideBlackBox)
blackBox.appendChild(textInsideBlackBox)
container.appendChild(blackBox)