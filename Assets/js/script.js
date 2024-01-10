var todaysDate = dayjs();
var currentTime = todaysDate.format('h');

const $currentDay = $('#currentDay');
$currentDay.text(todaysDate.format('dddd, MMMM D, YYYY'));

var userInput = $('#user-input');


$(document).ready( function () {

  //save note to local storage
  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    
    let time = $(this).parent().attr('id');
    let userInput = $(this).siblings('#user-input').val();
      
    localStorage.setItem(time, userInput);

  });


function timeColor () {

  let currentTime = dayjs().hour();

   $('.time-block').each( function () {

      let hour = parseInt($(this).attr('id'));
      
      //assigns past, present, or fututre color code to time blocks
      if(currentTime === hour) {
        $(this).addClass('present');
      } else if(hour > currentTime) {
        $(this).addClass('future');
      } else {
        $(this).addClass('past');
      }
   })
    }

      function readNotesFromStorage(){
    
      //retirieves saved notes from local storage and displays each
        $('.description').each( function () {
    
        let time = $(this).parent().attr('id');
        let savedNote = localStorage.getItem(time);
        return $(this).val(savedNote);
          
        })

  };

   readNotesFromStorage();
   timeColor();
    

  });
  

 
