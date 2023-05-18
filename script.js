const questions =[
    {
        question: "which of these is the largest animal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "blue whale", correct: true},
            {text: "elephant", correct: false},
            {text: "giraffe", correct: false},
        ]
    },
    {
        question: "which of these is the smallest country in the world?",
        answers: [
            {text: "vatican city", correct: true},
            {text: "india", correct: false},
            {text: "russia", correct: false},
            {text: "Nigeria", correct: false},
        ]
    },
    {
        question: "which of these is the largest desert in the world?",
        answers: [
            {text: "kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },
    {
        question: "which of these is the smallest continient in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
     {
        question: "which is the nigerain state with the largest land mass?",
        answers: [
            {text: "Lagos", correct: false},
            {text: "Niger", correct: true},
            {text: "Borno", correct: false},
            {text: "Kaduna", correct: false},
        ]
    },
     {
        question: "which is the nigerian state with the greatest number of local government area?",
        answers: [
            {text: "kaduna", correct: false},
            {text: "Kano", correct: true},
            {text: "Benue", correct: false},
            {text: "Niger", correct: false},
        ]
    },
     {
        question: "Which Nigerian state has `LIGHT OF THE NATION` as her slogan ?",
        answers: [
            {text: "Rivers", correct: false},
            {text: "Anambra", correct: true},
            {text: "Cross river", correct: false},
            {text: "Edo", correct: false},
        ]
    },
     {
        question: "which african country has the highest mountian in Africa?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Tanzania", correct: true},
            {text: "Algeria", correct: false},
            {text: "Sudan", correct: false},
        ]
    }
    ,
     {
        question: "where is the headquarters of the African Union located?",
        answers: [
            {text: "Nigeria", correct: false},
            {text: "Ethiopia", correct: true},
            {text: "Ghana", correct: false},
            {text: "Egypt", correct: false},
        ]
    }
    ,
     {
        question: "Which country won the first world cup?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Uruguay", correct: true},
            {text: "Agentina", correct: false},
            {text: "France", correct: false},
        ]
    }

];
const questionElement   = document.getElementById("question");
const answerButtons   = document.getElementById("answer-btns");
const nextButton   = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startquiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}
function showQuestion(){
    resetState(); 
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." +  currentQuestion.question;


currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML    = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
if(answer.correct){
    button.dataset.correct = answer.correct; 
}
button.addEventListener("click",selectAnswer);

});

}   
function resetState (){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
 answerButtons.removeChild(answerButtons.firstChild);       
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
if(button.dataset.correct ==="true"){
button.classList.add("correct");

}
button.disabled = true;

    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


 nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
    startquiz();
}
 })
startquiz()