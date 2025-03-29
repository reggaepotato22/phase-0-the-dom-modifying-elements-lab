// Write your code here!
document.getElementById("main").remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Your-Name is the champion"; // Replace "Your-Name" with your actual name

document.body.appendChild(newHeader);
