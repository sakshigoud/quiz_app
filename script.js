 const questions = [
    {
        question: " Which type of JavaScript language is ___" ,
        answers: [
            {text: "Object-oriented",correct: false},
            {text: "Object-Based ",correct: true},
            {text: "Assembly-language",correct: false},
            { text: "High-level",correct: false},
        ]
     },
     {
        question: "In JavaScript, what is a block of statement?",
        answers: [
            {text: "Conditional block",correct: false},
            {text: " block that combines a number of statements into a single compound statement ",correct: true},
            {text: "both conditional block and a single statement",correct: false},
            { text: "block that contains a single statement",correct: false},
        ]
     },
     {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: "new",correct: false},
            {text: " new ",correct: true},
            {text: "new",correct: false},
            { text: "new",correct: false},
        ]
     },
     
        ];

   const  questionElement = document.getElementById("question");
   const  answerButtons =  document.getElementById("answer-buttons");
   const  nextButton =  document.getElementById("next-btn");

   let currentQuestionIndex = 0;
   let score = 0; 

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion(){
    resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1 ;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
             button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer) ;
         });  
        }
    
        function resetState(){
            nextButton.style.display = "none";
            while(answerButtons.firstChild){
                answerButtons.removeChild(answerButtons.firstChild);
            }
        }
      function  selectAnswer(e){
          const selectedBtn = e.target;
          const isCorrect =  selectedBtn.dataset.correct === "true" ;
          if(isCorrect){
             selectedBtn.classList.add("correct");
             score++;
          }
          else{
            selectedBtn.classList.add("incorrect");
          }
          Array.from(answerButtons.children).forEach(button => { 
            if(button.dataset.correct === "true"){
                button.classList.add("correct");     
            }
            button.disabled = "true";
            });
            nextButton.style.display = "block" ;
        }

        function showScore(){
            resetState();
            questionElement.innerHTML =  `you scored ${score} out of ${questions.length}!`;
            nextButton.innerHTML = "Play Again";
            nextButton.style.display = "block";
        }
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
   } else{
    showScore();
}
}
   nextButton.addEventListener("click",() =>{
     if(currentQuestionIndex < questions.length){
             handleNextButton();        
     }
     else{
        startQuiz();
     }
   } )
      startQuiz();

