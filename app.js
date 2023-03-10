
const currentDate = dayjs().format('MM/DD/YYYY');
console.log(currentDate)

var displayDate = $(`#currentDay`);
// const displayDate = document.getElementById("currentDay");
displayDate.text(currentDate);

// displayDate.textContent = "hello"


// displayDate.text(currentDate);






// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var saveBtnArray = document.querySelectorAll(".saveBtn");

for (let i = 0; i < saveBtnArray.length; i++) {
  const saveButton = saveBtnArray[i];
  
  saveButton.addEventListener("click", function (event) {
    // event.preventDefault()
  console.log(event.target.parentNode.children[1].value)
  
  localStorage.setItem(`time${i}`, event.target.parentNode.children[1].value )
});
}

// console.log(saveBtn)
// saveBtn.addEventListener("click", function (event) {
//   console.log("dog")
//   var clickStatus = $(`this`)
// });

// saveBtn.on("click", function (event) {
//     var 
//   });



// var date = $('dayjs'.textcontent)
// var displayDate = document.querySelectorAll("headline");
// console.log()
// click button to render app
// needs a date for current day, assign variable and than use dayjs and .textcontent
// var date = $(`dayjs`)
// Date() may be similar to dayjs 
// var date = Date();

// console.log(displayDate)
