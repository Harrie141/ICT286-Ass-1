var names = [];
var nameV = document.getElementById("name");
var messageBox = document.getElementById("display");

function insert() {
 names.push( nameV.value.toUpperCase() );
 clearAndShow();
}

function clearAndShow() {
  // Clear our fields
  nameV.value = "";
  
  // Show our output
  messageBox.innerHTML = "";
  names.sort();
  messageBox.innerHTML += "Names: " + names.join(", ") + "<br/>";
}
