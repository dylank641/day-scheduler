var textArea = document.querySelector(".textarea");
var timeEl = $('#currentDay').html(moment().format('dddd, MMMM Do'));
var timeHeader = 9;
let data = [];


//updated date of current day
function update() {
    $('#currentDay').html(moment().format('dddd, MMMM Do'));
  }
  setInterval(update, 1000);
//end of date current day

// for (i = 0; i < 8; i++){
//     $('#mother').append("<div id = 'time-blocks'><h4 class='hour'>9AM</h4><textarea class='textarea'></textarea><button class='saveBtn'>Save</button></div>");
// }

//color code for 9am block
var today = new Date().getHours();
if (today == 9) {
   $('.nine-textarea').css("background-color", "red");
}
else if (today > 9) {
    $('.nine-textarea').css("background-color", 'gray')
}
else {
    $('.9textarea').css("background-color", "green");
}

//color code for 10am block
if (today == 10) {
    $('.ten-textarea').css("background-color", "red");
 }
 else if (today > 10) {
     $('.ten-textarea').css("background-color", 'gray')
 }
 else {
     $('.ten-textarea').css("background-color", "green");
 }

//color code for 11am block
if (today == 11) {
    $('.eleven-textarea').css("background-color", "red");
 }
 else if (today > 11) {
     $('.eleven-textarea').css("background-color", 'gray')
 }
 else {
     $('.eleven-textarea').css("background-color", "green");
 }

//color code for 12pm block
if (today == 12) {
    $('.twelve-textarea').css("background-color", "red");
 }
 else if (today > 12) {
     $('.twelve-textarea').css("background-color", 'gray')
 }
 else {
     $('.twelve-textarea').css("background-color", "green");
 }

//color code for 1pm block
if (today == 13) {
    $('.one-textarea').css("background-color", "red");
 }
 else if (today > 13) {
     $('.one-textarea').css("background-color", 'gray')
 }
 else {
     $('.one-textarea').css("background-color", "green");
 }

//color code for 2pm block
if (today == 14) {
    $('.two-textarea').css("background-color", "red");
 }
 else if (today > 14) {
     $('.two-textarea').css("background-color", 'gray')
 }
 else {
     $('.two-textarea').css("background-color", "green");
 }

//color code for 3pm block
if (today == 15) {
    $('.three-textarea').css("background-color", "red");
 }
 else if (today > 15) {
     $('.three-textarea').css("background-color", 'gray')
 }
 else {
     $('.three-textarea').css("background-color", "green");
 }

//color code foe 4pm block
if (today == 16) {
    $('.four-textarea').css("background-color", "red");
 }
 else if (today > 16) {
     $('.four-textarea').css("background-color", 'gray')
 }
 else {
     $('.four-textarea').css("background-color", "green");
 }

//color code for 5pm block
if (today == 17) {
    $('.five-textarea').css("background-color", "red");
 }
 else if (today > 17) {
     $('.five-textarea').css("background-color", 'gray')
 }
 else {
     $('.five-textarea').css("background-color", "green");
 }

 document.getElementById('nine').addEventListener("click", function(){
    var dataText = document.getElementById('nine-text').value;
    localStorage.setItem('9amSchedule', dataText);
 })
 document.getElementById("nine-text").value = localStorage.getItem('9amSchedule');

 document.getElementById('ten').addEventListener("click", function(){
    var dataText = document.getElementById('ten-text').value;
    localStorage.setItem('10amSchedule', dataText);
 })
 document.getElementById("ten-text").value = localStorage.getItem('10amSchedule');


 document.getElementById('eleven').addEventListener("click", function(){
    var dataText = document.getElementById('eleven-text').value;
    localStorage.setItem('11amSchedule', dataText);
 })
 document.getElementById("eleven-text").value = localStorage.getItem('11amSchedule');


 document.getElementById('twelve').addEventListener("click", function(){
    var dataText = document.getElementById('twelve-text').value;
    localStorage.setItem('12amSchedule', dataText);
 })
 document.getElementById("twelve-text").value = localStorage.getItem('12amSchedule');


 document.getElementById('one').addEventListener("click", function(){
    var dataText = document.getElementById('one-text').value;
    localStorage.setItem('1pmSchedule', dataText);
 })
 document.getElementById("one-text").value = localStorage.getItem('1pmSchedule');


 document.getElementById('two').addEventListener("click", function(){
    var dataText = document.getElementById('two-text').value;
    localStorage.setItem('2pmSchedule', dataText);
 })
 document.getElementById("two-text").value = localStorage.getItem('2pmSchedule');


 document.getElementById('three').addEventListener("click", function(){
    var dataText = document.getElementById('three-text').value;
    localStorage.setItem('3pmSchedule', dataText);
 })
 document.getElementById("three-text").value = localStorage.getItem('3pmSchedule');


 document.getElementById('four').addEventListener("click", function(){
    var dataText = document.getElementById('four-text').value;
    localStorage.setItem('4pmSchedule', dataText);
 })
 document.getElementById("four-text").value = localStorage.getItem('4pmSchedule');


 document.getElementById('five').addEventListener("click", function(){
    var dataText = document.getElementById('five-text').value;
    localStorage.setItem('5pmSchedule', dataText);
 })
 document.getElementById("five-text").value = localStorage.getItem('5pmSchedule');

 