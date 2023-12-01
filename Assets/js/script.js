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


$(document).ready( () => {
//save note to local storage
    $('.saveBtn').on('click', function () {
    let time = $(this).parent().attr('id');
    let text = $(this).siblings('.description').val();
    
      localStorage.setItem(time, text);
  });
    
    //showing current time
    console.log(currentTime);
    
function timeColor () {

  let currentTime = dayjs().hour();
  console.log(currentTime);

   $('.time-block').each( function () {

      let hour = parseInt($(this).attr('id'));
      console.log(hour);
      

      if(currentTime === hour) {
        $(this).addClass('present');
      } else if(hour > currentTime) {
        $(this).addClass('future');
      } else {
        $(this).addClass('past');
      }
   })

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    }

    function readNotesFromStorage(){
      var prevNotes = localStorage.getItem('userInput');
      if(prevNotes) {
        prevNotes = JSON.parse(prevNotes);
      } else {
        prevNotes = [];
      }
      return prevNotes;

    };

    timeColor();
    readNotesFromStorage();

  });
  


