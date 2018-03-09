// TODO: Assign value of "answers" variable to an array of strings
// that could be answers to magic 8 ball type questions
var answers = [
  "Good", 
  "Bad", 
  "21", 
  "Take a step back and breathe, buddy"]

var container = document.getElementById('fortune-container');
console.log(container);

var small = document.querySelector("small");
console.log(small);

var allForm = document.querySelectorAll("form");
console.log(allForm);

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form, and assign it to a variable
  2. console log something conversational including the question, like
     "Oh, you want to know if you'll win the lottery?"
*/

function capA(){
  //stops form submit
  event.preventDefault();
  console.log("form submitted");
  
  var ans = document.fortune.uFort.value
  
  //logic for user fortune
  //console.log("Your new fortune to be added: " + '"' + userA + '"');
  
  //see if value is already in answers
  var i = answers.indexOf(ans)
  
  //if not, insert it into answers
  if(i == -1){
    answers.push(ans);
    console.log(answers.length);
  } else {
    console.log("We've already got that fortune, thanks");
  }
  // Insert answer into DOM in container
  container.innerHTML = ans
  //resets value form
  document.fortune.uFort.value = "";
  
    //remove "red" class from all forms
  var forms = document.getElementsByTagName('form')
  
  for(var i=0;i<forms.length;i++){
    forms[i].classList.remove('red');
  }
  // Add "red" class to form
  document.getElementById('fortune').classList.add('red');
}

function capQ(){
  //stops form submit
  event.preventDefault();
  console.log("form submitted");
  
  var userQ = document.question.uQuest.value
  
  //logic for captured question
  console.log("Oh, you want to know, " + '"' + userQ + '"');
  
  //Math.random() returns decimal between 0 - 1
  //.length is 1 more than highest valid index (no need for +1)
  //Math.floor() allows for rounding
  //bulletproof formula for randomly generating a valid index for an arrow
  var rando = Math.floor(Math.random() * answers.length);
  
  var ans = answers[rando]
  console.log(ans);
  
  document.question.uQuest.value = "";
  
  //remove "red" class from all forms
  var forms = document.getElementsByTagName('form')
  
  for(var i=0;i<forms.length;i++){
    forms[i].classList.remove('red');
  }
  // Add "red" class to form
  document.getElementById('question').classList.add('red');
}

function getMagic(message){
  // get img, set it's alt to be sillier
  var img = document.querySelector("img")
  img.setAttribute("alt", "so magic!!");
  
  console.log("so magic!! " + message);
  capQ()
  
  img.classList.toggle("left");
}