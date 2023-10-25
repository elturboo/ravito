let roomNum = 1;

// Function to create a new room booking form
function createRoomForm() {
  const formContainer = document.getElementById("formContainer");
  // Create room right side form elements
  const roomRow = document.createElement("div");
  roomRow.classList.add("row", "room_list");
  const roomRight = document.createElement("div");
  roomRight.classList.add("col-6");



  const childrenLabel = document.createElement("label");
  childrenLabel.textContent = "Number of Childs: ";

  const roomRightBox = document.createElement("div");
  roomRightBox.classList.add("d-flex", "gap-4", "align-items-center");


  const select = document.createElement("select");
  select.classList.add(`select${roomNum}`);
  select.setAttribute("onchange", "val()");
  const myOptionOne = document.createElement("option");
  myOptionOne.text = "1";
  myOptionOne.value = 1;

  const myOptionTwo = document.createElement("option");
  myOptionTwo.text = "2";
  myOptionTwo.value = 2;

  const myOptionThree = document.createElement("option");
  myOptionThree.text = "3";
  myOptionThree.value = 3;

  const myOptionFour = document.createElement("option");
  myOptionFour.text = "4";
  myOptionFour.value = 4;

  const myOptionFive = document.createElement("option");
  myOptionFive.text = "5";
  myOptionFive.value = 5;

  const roomRightBtnAdd = document.createElement("button");
  roomRightBtnAdd.classList.add("addChild","btn","p-0");

  const roomRightBtnAddIcon = document.createElement("i");
  roomRightBtnAddIcon.classList.add("fa-solid", "fa-plus");
  // ==================================
  // Create room left side form elements
  const roomLeft = document.createElement("div");
  roomLeft.classList.add("col-6");

  const roomHeading = document.createElement("h2");
  roomHeading.textContent = `Room ${roomNum}`;
  roomHeading.classList.add("d-flex","justify-content-between","align-items-center");

  const removeRoom = document.createElement("span");
  removeRoom.textContent= "Remove";
  removeRoom.classList.add("removeRoom","red_color","fw-normal", "fs-6");

  const adultsLabel = document.createElement("label");
  adultsLabel.textContent = "Number of Adults: ";

  const buttonBox = document.createElement("div");
  buttonBox.classList.add("d-flex");

  const adultsInput = document.createElement("input");
  adultsInput.type = "number";
  adultsInput.min = "1";
  adultsInput.value = "1";

  const increaseButton = document.createElement("button");
  increaseButton.textContent = "+";

  const decreaseButton = document.createElement("button");
  decreaseButton.attribute;
  decreaseButton.textContent = "-";

  // left side Append form elements to the container
  formContainer.appendChild(roomRow);
  roomRow.appendChild(roomHeading);
  roomHeading.appendChild(removeRoom);
  roomRow.appendChild(roomLeft);
  roomRow.appendChild(roomRight);
  roomLeft.appendChild(adultsLabel);
  roomLeft.appendChild(buttonBox);

  buttonBox.appendChild(decreaseButton);
  buttonBox.appendChild(adultsInput);
  buttonBox.appendChild(increaseButton);


  // right side
  roomRight.appendChild(childrenLabel);
  roomRight.appendChild(roomRightBox);
  roomRightBox.appendChild(select);
  select.appendChild(myOptionOne);
  select.appendChild(myOptionTwo);
  select.appendChild(myOptionThree);
  select.appendChild(myOptionFour);
  select.appendChild(myOptionFive);

  roomRightBox.appendChild(roomRightBtnAdd);

  roomRightBtnAdd.appendChild(roomRightBtnAddIcon);
  // Add event listeners to the buttons
  increaseButton.addEventListener("click", () => {
    adultsInput.value = parseInt(adultsInput.value) + 1;
  });

  decreaseButton.addEventListener("click", () => {
    if (parseInt(adultsInput.value) > 0) {
      adultsInput.value = parseInt(adultsInput.value) - 1;
    }
  });

  roomNum++;
  const button = document.querySelectorAll("button");
  button.forEach((button) => {
    button.setAttribute("type", "button");
  });
}

// Add event listener to the "Add Room" button
const addRoomButton = document.getElementById("addRoomButton");
addRoomButton.addEventListener("click", createRoomForm);

// remove room
$(document).on("click", ".removeRoom", function () {
  roomNum--;
  $(this).closest('.room_list').remove();
});

// get child age
function val() {
  let childAge = document.getElementsByClassName(`select${roomNum}`).value;
}

// remove child
$(document).on("click", ".removeChild", function () {
  childrenNums =
    $(this).parent().parent().parent().find(".specialSpan").length - 1;
  $(this).parent().parent().remove();
  if (childrenNums >= 4) {
    $(`#add_child_btn${roomNum}`).css({
      display: "none",
    });
    $(`#add_child_select${roomNum}`).css({
      display: "none",
    });
  } else {
    $(`#add_child_btn${roomNum}`).css({
      display: "block",
    });
    $(`#add_child_select${roomNum}`).css({
      display: "block",
    });
  }
});
// add child
$(document).on("click", ".addChild", function () {
});

// toggle class active to checkbox on click
let checkboxes = [
  "#noStar",
  "#oneStar",
  "#threeStar",
  "#fourStar",
  "#fiveStar",
  "#ro",
  "#bb",
  "#hb",
  "#fb",
  "#ai",
];
checkboxes.forEach(function (checkbox) {
  $(checkbox).on("click", function () {
    $(this).toggleClass("active");
  });
});

// close room dropdown on done
$("#closeRooms").click(function () {
  $(this).closest(".dropdown-menu").prev().dropdown("toggle");
});
