// Create New Item with Click.
document.querySelector(".submitBtn").addEventListener("click", function() {
  var buttonKey = this.innerHTML;
  listeners(buttonKey);
});

// Create New Item with Enter.
document.addEventListener("keydown", function(event) {

});

// Remove Item with Keyboard.
document.addEventListener("keydown", function(event) {
  var deleteKey = event.key;
  listeners(deleteKey);
});

// Remove All items with Click.
document.querySelector(".clearBtn").addEventListener("click", function() {
  var deleteAll = this.innerHTML;
  listeners(deleteAll);
});


// Function to Create a New Item.
function addNewItem() {

  // Getting and Setting INPUT.
  var inputValue = document.querySelector("input").value;

  var newLi = document.createElement("li");

  var textLi = document.createTextNode(inputValue + " ");

  // Setting the DONE icon.
  var doneIcon = document.createElement("button");

  doneIcon.className = "iconDone";

  var doneIconText = document.createTextNode("✅ ");

  doneIcon.appendChild(doneIconText);

  // Setting the DELETE icon.
  var deleteIcon = document.createElement("button");

  deleteIcon.className = "iconDelete";

  deleteIcon.type = "button";

  var deleteIconText = document.createTextNode("❌")

  deleteIcon.appendChild(deleteIconText);

  // Writing the ELEMENTS in the New List Item.
  newLi.appendChild(textLi);
  newLi.appendChild(doneIcon);
  newLi.appendChild(deleteIcon);

  // Writing in the UL.
  var UnorderedList = document.querySelector("ul");
  UnorderedList.appendChild(newLi);

  // Refreshing the Input Value.
  document.querySelector("input").value = "";

  document.querySelector("input").placeholder = "Add an item!";

}

// Function to Remove Item.
function removeItem() {

  var child = document.querySelector("li");
  var parent = child.parentElement;
  parent.removeChild(parent.lastElementChild);

}

// Function to Remove All Items.
function removeAllItems() {
  document.querySelector("ul").innerHTML = "";
}

// Switch to have all the Functions.
function listeners(key) {

  switch (key) {
    case "Submit":
      addNewItem();
      break;

    case "Enter":
      addNewItem();
      break;

    case "Backspace":
      removeItem();
      break;

    case "Clear List":
      removeAllItems();
      break;

    default:

  }
}
