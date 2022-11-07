//either need to add more options for each question or shorten the number of questions
// var quizData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var random1 = Math.floor(Math.random() * quizData.length)
// var choice1 = quizData[random1];
// quizData.splice(random1, 1);


const quizData = [
    {
        question: "Javascript is an _____ language?",
        a: "Object-oriented",
        b: "Object-based",
        c: "Procedural",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Upon encountering empty statements, what does Javascript interpreter do?",
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None of the above",
        correct: "b",
    }
    ,
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a",
    }
    ,
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        a: "Both the datatype and the result of the expression are compared.",
        b: "Only the datatype of the expression is compared",
        c: "Only the value of the expression is compared",
        d: "None of the above",
        correct: "a",
    }
    ,
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        a: "is in",
        b: "exists",
        c: "in",
        d: "lies",
        correct: "c",
    }
    ,
    {
        question: "What is the use of the <noscript> tag in Javascript?",
        a: "Clears all the cookies and cache",
        b: "Clears all the cookies from the cookie jar",
        c: "both A and B",
        d: "The contents are displayed by non JS-based browsers.",
        correct: "d",
    }
    ,
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:?",
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
        correct: "c",
    },
    {
        question: "What does the Javascript debugger statement do?",
        a: "It will debus all the errors in the program at runtime",
        b: "It acts as a breakpoint in the program",
        c: "It will debug error in the current statement if any.",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "Which function is used to serialize an object into a JSON string in javascript?",
        a: "stringify()",
        b: "parse()",
        c: "convert",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following are closures in Javascript?",
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
        correct: "d",
    }
   
];

const quiz = document.getElementById('quiz')//getting quiz by ID
const answerEls = document.querySelectorAll('.answer')//returns all element decendants of node that match selector
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')// a
const b_text = document.getElementById('b_text')// b
const c_text = document.getElementById('c_text')// c
const d_text = document.getElementById('d_text')// d
const submitBtn = document.getElementById("submit")// assigning variable to submit button
let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  

}
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answer
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
          answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
    }
    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    } else{
        quiz.innerHTML = `<h2> you answered ${score}/${quizData.length} questions correctly <h2>
        <button onclick="location.reload()">Reload</button>`
    }
}
})

