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


$(document).ready( function () {


  readNotesFromStorage();

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
    
        // $('#user-input').each( function () {

          // let time = $(this).parent().attr('id');
          // let savedNote = localStorage.getItem(time);
          // console.log(time);
          // console.log(savedNote);

          // if(!savedNote){
          //   return;
          // }
        // $(this).siblings('.description').textContent = savedNote;

        // })
        //ONLY 9 HR BLOCK IS PERSISTING
        $('#user-input').each( function () {
        let test = 'where is this  going to show up?';
        let time = $(this).parent().attr('id');
        let savedNote = localStorage.getItem(time);
        //shows up in 9 hr block
        //userInput.val(savedNote);
         $(this).val(savedNote);
       
       
       //does not show output
        //$(this).textContent = savedNote;
        })

  };



    readNotesFromStorage();
    timeColor();
    

  });
  


