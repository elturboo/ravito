$(document).ready(function () {
  // When the eye icon is clicked
  $("#toggle-password").click(function () {
      const passwordField = $("#password");
      if (passwordField.attr("type") === "password") {
          passwordField.attr("type", "text");
      } else {
          passwordField.attr("type", "password");
      }
  });
});

let roomNum = 1;
// get child age
function val() {
  childAge = document.getElementById(`add_child_select${roomNum}`).value;
  return childAge;
}
// add room
$(document).on("click", ".addRoom", function () {
  roomNum++;
  $(this).parent().parent().parent().parent().append(` <div class="room_list">
        <h4 class="d-flex justify-content-between align-items-center">Room ${roomNum} <span class="removeRoom red_color fw-normal">remove</span></h4>
        <div class="row">
            <div class="col-6">
                <label for="">Adults</label>
                <div class="quantity-wrapper">
                        <button type="button" class="quantity-button decreases">
                            -
                        </button>
                        <input id="quantity" class="quantity" type="text"
                            value="1">
                        <button type="button" class="quantity-button increases">
                            +
                        </button>
                        </input>
                </div>
            </div>
            <div class="col-6">
                <label for="">Children</label>
                <div>
                
                <div class="d-flex gap-4 align-items-center">
                        <select onchange="val()"  class="add_child " name="" id="add_child_select${roomNum}">
                            <option hidden>Add a child</option>
                            <option value="0">0 years</option>
                            <option value="1">1 years</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                        </select>
                        <button id="add_child_btn${roomNum}" type="button" class="addChild btn p-0"><i
                        class="fa-solid fa-plus"></i></button>                </div>
            </div>
            </div>
        </div>
    </div>`);
});

// remove room
$(document).on("click", ".removeRoom", function () {
  roomNum--;
  $(this).parent().parent().remove();
});

// numbers of adults

let increase = document.querySelectorAll(".increases");
let decrease = document.querySelectorAll(".decreases");

function increaseValue(index) {
  let value = document.getElementsByClassName("quantity")[index].value;
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementsByClassName("quantity")[index].value = value;
}

function decreaseValue(index) {
  let value = document.getElementsByClassName("quantity")[index].value;
  value = isNaN(value) ? 1 : value;
  value--;
  value < 1 ? (value = 1) : "";
  document.getElementsByClassName("quantity")[index].value = value;
}

increase.forEach(function (minor, index) {
  minor.addEventListener("click", () => {
    increaseValue(index);
  });
});

decrease.forEach(function (plus, index) {
  plus.addEventListener("click", () => {
    decreaseValue(index);
  });
});

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
  childrenNums =
    $(this).parent().parent().parent().find(".specialSpan").length + 1;
  if (childAge >= 0) {
    $(this).parent().parent()
      .prepend(`<div class="d-flex gap-4 align-items-center specialSpan">
        <span class="child_badge">
        ${childAge} ${childAge > 1 ? "years" : "year"}
        <button type="button" class="removeChild btn p-0 red_color"><i class="fa-solid fa-times"></i></button>
        </span>
        </div>`);
  }

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

var filterHeight = document.getElementById("myFilter").offsetHeight; //includes margin,border,padding


$(window).scroll(function () {
  if ($(this).scrollTop() > filterHeight) {
    $(".navbar").css("background-color", "#1d6699");
  } else {
    $(".navbar").css("background", "transparent");
  }
});


