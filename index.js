// Create New Item with Click.
document.querySelector(".submitBtn").addEventListener("click", function() {
  var buttonKey = this.innerHTML;
  listeners(buttonKey);
});

// Create New Item with Enter.
document.addEventListener("keydown", function(event) {
  listeners(event.key);
});

// Remove Item with Keyboard & LineThrough.
document.querySelector("ul").addEventListener("click", function() {
  if (event.target.className === "iconDelete") {
    var parent = event.target.parentNode;
    parent.remove();
  }

  if (event.target.className === "iconDone") {
    var parent = event.target.parentNode;
    parent.classList.toggle("lineThrough");
  }
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

  doneIcon.setAttribute("class", "iconDone");

  doneIcon.setAttribute("type", "button");

  var doneIconText = document.createTextNode("✅ ");

  doneIcon.appendChild(doneIconText);

  // Setting the DELETE icon.
  var deleteIcon = document.createElement("button");

  deleteIcon.setAttribute("class", "iconDelete");

  deleteIcon.setAttribute("type", "button");

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

  document.querySelector("input").placeholder;

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
      removeAllItems();
      break;

    case "Clear List":
      removeAllItems();
      break;

    default:

  }
}
// Last line of code.
