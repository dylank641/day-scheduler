var textArea = document.querySelector(".textarea");
var timeEl = $('#currentDay').html(moment().format('dddd, MMMM Do'));

//updated date of current day
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do'));
  }
  setInterval(update, 1000);

  var changeStatus = function(){
      if (moment().isAfter(timeEl)){
          console.log("yo");
      }
  }
