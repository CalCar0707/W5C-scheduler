var todaysDate = dayjs();
var currentTime = todaysDate.format('h');

const $currentDay = $('#currentDay');
$currentDay.text(todaysDate.format('dddd, MMMM D, YYYY'));

var userInput = $('#user-input');

//variables for diff hrs
const hrNine = $('#hour-9').text();
const hrTen = $('#hour-10').text();
const hrEleven = $('#hour-11').text();
const hrTwelve = $('#hour-12').text();
const hrOne = $('#hour-1').text();
const hrTwo = $('#hour-2').text();
const hrThree = $('#hour-3').text();
const hrFour = $('#hour-4').text();
const hrFive = $('#hour-5').text();



// const savedTask = localStorage.getItem('user-input');
// document.getElementById('user-input').value = savedTask

$(document).ready( function () {

    $('.saveBtn').on('click', function () {
    //EVENT TARGET AND LISTNERS JQUERY CODECADEMY PROJECT FEEDSTER
    let time = $(this).parent().attr('id');
    let text = $(this).siblings('.description').val();
      console.log(text);
      console.log(time);

      localStorage.setItem(time, text);
  });

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    
    //shoginw current time
    console.log(currentTime);
    

    if (9 === currentTime) { 
        $('#hour-9').addClass('present');
      } else if (hrNine < currentTime){
        $('#hour-9').addClass('past');
      } else if (hrNine > currentTime) {
        $('#hour-9').addClass('future');
      };

      if (10 === currentTime) { 
        $('#hour-10').addClass('present');
      } else if (hrTen < currentTime){
        $('#hour-10').addClass('past');
      } else if (hrTen > currentTime) {
        $('#hour-10').addClass('future');
      };

      if (hrEleven === currentTime) { 
        $('#hour-11').addClass('present');
      } else if (hrEleven < currentTime){
        $('#hour-11').addClass('past');
      } else if (hrEleven > currentTime) {
        $('#hour-11').addClass('future');
      };

      if (hrTwelve === currentTime) { 
        $('#hour-12').addClass('present');
      } else if (hrTwelve < currentTime){
        $('#hour-12').addClass('past');
      } else if (hrTwelve > currentTime) {
        $('#hour-12').addClass('future');
      };

      if (hrOne === currentTime) { 
        $('#hour-1').addClass('present');
      } else if (hrOne < currentTime){
        $('#hour-1').addClass('past');
      } else if (hrOne > currentTime) {
        $('#hour-1').addClass('future');
      };

      if (hrTwo === currentTime) { 
        $('#hour-2').addClass('present');
      } else if (hrTwo < currentTime){
        $('#hour-2').addClass('past');
      } else if (hrTwo > currentTime) {
        $('#hour-2').addClass('future');
      };

      if (hrThree === currentTime) { 
        $('#hour-3').addClass('present');
      } else if (hrThree < currentTime){
        $('#hour-3').addClass('past');
      } else if (hrThree > currentTime) {
        $('#hour-3').addClass('future');
      };

      if (4 === currentTime) { 
        $('#hour-4').addClass('present');
      } else if (hrFour < currentTime){
        $('#hour-4').addClass('past');
      } else if (hrFour > currentTime) {
        $('#hour-4').addClass('future');
      };

      if (5 == currentTime) { 
        $('#hour-5').addClass('present');
      } else if (5 < currentTime){
        $('#hour-5').addClass('past');
      } else if (5 > currentTime) {
        $('#hour-5').addClass('future');
      };

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
  
  });
  
    
//});

function readNotesFromStorage(){
  var prevNotes = localStorage.getItem('userInput');
  if(prevNotes) {
    prevNotes = JSON.parse(prevNotes);
  } else {
    prevNotes = [];
  }
  return prevNotes;
};


