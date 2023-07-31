const questions = [{
    'que': "ALU stand for?",
    'a': 'Arithmethic Logic Unit',
    'b': 'Application Logic Unit',
    'c': 'Array Logic Unit',
    'd': 'None of the above',
    'correct': 'a',
},
{
    'que': "The brain of any computer system is?",
    'a': "ALU",
    'b': "CPU",
    'c': "Memory",
    'd': "None of the above",
    'correct': "b",
},
{
    'que': "What does CSS stand for",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "None of the above",
    'correct': "b",
},
{
    'que': "Which of the following computer generation user concepts of artificial intelligence?",
    'a': "First Generation",
    'b': "Second Generation",
    'c': "Third Generation",
    'd': "Fifth Generation",
    'correct': "d",
},
{
    'que': "Which is the smallest continent in the world?",
    'a': "Asia",
    'b': "Australia",
    'c': "Africa",
    'd': "Arctic",
    'correct': "b",
}

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong =0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = ' ${index + 1}) ${data.que}';
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = 
    <div style="text-align:centre">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right} / ${total} are correct </h2>
        </div>

}


loadQuestion();
