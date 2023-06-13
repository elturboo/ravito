
// add child
$(document).on('click', '.addChild', function () {
    $(this).parent().parent().append(`<div class="d-flex gap-4 align-items-center">
    <select class="add_child " name="" id="">
        <option hidden>Add a child</option>
        <option value="0">0 years</option>
        <option value="1">1 years</option>
        <option value="2">2 years</option>
        <option value="3">3 years</option>
    </select>
    <button type="button" class="removeChild btn p-0 red_color"><i class="fa-solid fa-times"></i></button>
    </div>`);
});

// remove child
$(document).on('click', '.removeChild', function () {
    $(this).parent().remove();
});

let increase = document.querySelectorAll(".increases");
let decrease = document.querySelectorAll(".decreases");
// add room
let roomNum = 1;
$(document).on('click', '.addRoom', function () {
    
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
                            value="0">
                        <button type="button" class="quantity-button increases">
                            +
                        </button>
                        </input>
                </div>
            </div>
            <div class="col-6">
                <label for="">Children</label>
                <div class="d-flex gap-4 align-items-center">
                        <select class="add_child " name="" id="">
                            <option hidden>Add a child</option>
                            <option value="0">0 years</option>
                            <option value="1" selected>1 years</option>
                            <option value="2">2 years</option>
                            <option value="3">3 years</option>
                        </select>
                        <button type="button" class="addChild btn p-0"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
        </div>
    </div>`);

    increase = [...increase,document.querySelector(".increases") ]
    decrease = [...decrease,document.querySelector(".increases") ]
});

setTimeout(() => {
    console.log(increase)
}, 5000);


// remove room
$(document).on('click', '.removeRoom', function () {
    roomNum--;
    $(this).parent().parent().remove();
});

// numbers of adults




function increaseValue(index) {
    let value = document.getElementsByClassName("quantity")[index].value;
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementsByClassName("quantity")[index].value = value;
}

function decreaseValue(index) {
    let value = document.getElementsByClassName("quantity")[index].value;
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
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
})