var today = dayjs();
var currentTime = today.format('HH');
console.log(currentTime);

$('#currentDay').text(today.format('dddd, MMMM D, YYYY hh:mm:ss'));
//^^ need to find out how to add advanced day js for day with ordinal
var userInput = $('#user-input');

//variables for diff hrs
const hrNine = $('#hour-9').text();
const hrTen = $('#hour-10');
const hrEleven = $('#hour-11');
const hrTwelve = $('#hour-12');
const hrOne = $('#hour-1');
const hrTwo = $('#hour-2');
const hrThree = $('#hour-3');
const hrFour = $('#hour-4');
const hrFive = $('#hour-5');

console.log(hrNine);

//variables for diff time classes
const pastTime = $('.row time-block past');
const presentTime = $('.row time-block present');
const futureTime = $('.row time-block future');

const savedTask = localStorage.getItem('user-input');
document.getElementById('user-input').value = savedTask

$(document).ready(() => {
    
$( () => {
    
    })

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    //$('#save-button').click( (event) => {
      //event.preventDefault();
      //$(this).siblings(userInput)
      //const listItem = document.createElement('p');
      //localStorage.setItem('user-input', JSON.stringify((userInput)));
      //const savedTask = localStorage.getItem('user-input');
      //listItem.append(savedTask); 

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
      if (hrNine === currentTime.value) { 
        hrNine.attr('class', 'present');
      } else if (hrNine < currentTime.value){
        //hrNine.addClass('past');
        hrNine.attr('class', 'past');
      } else if (hrNine > currentTime.value) {
        //hrNine.addClass('future');
        hrNine.attr('class', 'future');
      };
    
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
    
;
