'use strict'

function generateMainPage(){
const start = `
<div class="startPage">
<h1>IT Career Path Quiz</h1>
<img src="https://i.imgur.com/hWA0HSh.jpg" alt="brainPic">
<h2>Looking to find a new career in technology?</h2>
<p>We are here to help! </p>
<p>We know how tough it is to choose a new career.</p>
</p>
Our questionaire will help match you with the right role!</p>
<button class="startButton">Start</button>
</div>
`
const html =`${start}`;
renderQuiz(html);
//STORE.quizStarted = true;
}



function quizPage(){
  const nextPage = `
<div class="quiz-container">
<h1>IT Quiz App<h1>
<img src="https://perezbox.com/wp-content/uploads/2012/05/software-design.jpg" alt="brainPic">
<br><br>
<div id="quizQuestion">
  ${myQuestions.question}
  </div>
</div>
<form class="myForm">
<input type="radio" id="" name="answers" value="1" checked="">
<label for="ans1">${myQuestions.answer}</label><br>
<input type="radio" id="ans2" name="answers" value="2"checked="">
<label for="ans2">${myQuestions.answer}</label><br>
<input type="radio" id="ans2" name="answers" value="3" checked="">
<label for="ans3">${myQuestions.answer}</label><br>
<input type="radio" id="ans2" name="answers" value="4" checked="">
<label for="ans4">${myQuestions.answer}</label><br>
<input type="radio" id="ans5" name="answers" value="5"checked="">
<label for="ans1">${myQuestions.answer}</label><br>
  
  <div class="buttonOnPage">
  <button id="submit">Submit</button>
  <button id="previous">Previous</button>
  </form>

`
const html =`${nextPage}`;
renderQuiz(nextPage);
}



//store the variables of the quiz



/*
function nextQuestionTwo() {
  let questionNumber = STORE.questionNumber
  let question = STORE.questions[questionNumber];

  if (questionNumber >= 5) {
         return endOfGame()
      }
      let numberWrong = STORE.wrong;
      const questionNumberHtml = `<div class='questionNumber'>Question ${questionNumber + 1}/5</div>`
      const trackScore =`<div class='trackScoreHtml'>${STORE.score}/${questionNumber} correct</div>
      <div class='trackScoreHtml'>${numberWrong}/${questionNumber} wrong</div>`;
      const questionAndScore = `<div class = 'question-score'>${questionNumberHtml}${trackScore}</div>`

      const questionHtml = `<div class ="box"> 
          <h3 class= "question"> ${question.question} </h3>
      <form class="form" >
        <div class="radioButton">
          <input type="radio" id="ans1" name="answers" value="${question.answers[0]}">
          <label for="ans1">${question.answers[0]}</label><br>
        </div>
        <div class="radioButton">
          <input type="radio" id="ans2" name="answers" value="${question.answers[1]}">
          <label for="ans2">${question.answers[1]}</label>
        </div>
        <div class="radioButton">
          <input type="radio" id="ans3" name="answers" value="${question.answers[2]}">
          <label for="ans3">${question.answers[2]}</label>
        </div>
        <div>
          <input type="radio" id="ans4" name="answers" value="${question.answers[3]}">
          <label for="ans4">${question.answers[3]}</label></br> 
        </div><div>
        <button class="checkAnswer" type="submit" id="submit">submit</button>
    </div>
  </form>
  </div>`;

  renderQuiz(`${questionAndScore}${questionHtml}`);
}
*/
function answerSubmit(event) {
  event.preventDefault();
  let answer = $("input[name=answers]:checked", ).val();

}



/*
  if (answer){
    return nextQuestionTwo();
  }
  if (answer === STORE.questions[STORE.questionNumber].correctAnswer) {
      STORE.score++;
      STORE.right++;
      correct();
      //should iterate 
  }else if (STORE.questions[STORE.questionNumber].correctAnswer) {
    STORE.wrong++;
    wrong();
    }

  STORE.questionNumber++;
  console.log(STORE.score);
}


function endOfQuiz(){
  return `
  <div class="endOfQuiz">
  <h2>End of Quiz</h2>
  <h3>Thanks for taking or IT career Path Quiz!</h3>
      <p>Judging by our results, it looks like you have a bright future in!</p>
      <p>Role Placeholder</p>
      <p>Please take time to review your recommened career path. We have also attached some links to start your search. 
      If you would like further assistqance with placement, please reach out to us. </p>
      <p>We recommend choosing a course with the timeframe of</p>
      <p>Course-Length</p>
</div>
  `
}


*/
//Render function
function renderQuiz(html) {
  $('main').html(html);
}


function main() {
  generateMainPage();
}

//Injects html into the DOM
$(main);

//Event Listeners
$('main').on('click', '.startButton', quizPage);

$('main').on('submit', '.myForm', answerSubmit);
