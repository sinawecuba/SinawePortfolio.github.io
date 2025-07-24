var item1; // Variable to store the first user input
var item2; // Variable to store the second user input
var item3; // Variable to store the third user input

document.getElementById("changeList").onclick = newList; // When the element with ID "changeList" is clicked, call newList()

function newList() {
    item1 = prompt("Enter a new first thing: "); // Prompt the user to enter a new first item
    item2 = prompt("Enter a new second thing: "); // Prompt for a new second item
    item3 = prompt("Enter a new third thing: "); // Prompt for a new third item
    updateList(); // Call the function to update the list with new values
}

function updateList() {
    document.getElementById("firstThing").innerHTML = item1; // Replace the first list item's text with item1
    document.getElementById("secondThing").innerHTML = item2; // Replace the second list item's text with item2
    document.getElementById("thirdThing").innerHTML = item3; // Replace the third list item's text with item3
}
