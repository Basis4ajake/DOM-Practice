const container = document.querySelector("#container")
const content = document.createElement("div")

content.classList.add("content")
content.textContent("This was added via Javascript")

container.appendChild(content)

const redText = document.createElement("div")
redText.setAttribute("redText")
redText.setAttribute("style", "color: red;")
redText.textContent("Hey I'm Red!")

const blueH3 = document.createElement("div")
blueH3.classList.toggle("blueHeader")
blueH3.setAttribute("style", "color: blue;");
blueH3.textContent("Hey I am Blue!")