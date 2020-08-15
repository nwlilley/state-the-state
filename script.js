console.log("hello")

const answerOne = document.querySelector('#answer-one')
const answerTwo = document.querySelector('#answer-two')
const answerThree = document.querySelector('#answer-three')

const answerOneCheckbox = document.querySelector('#answer-one-checkbox')
const answerTwoCheckbox = document.querySelector('#answer-two-checkbox')
const answerThreeCheckbox = document.querySelector('#answer-three-checkbox')

const strikeBoxes = document.querySelectorAll('score-card__strike-boxes--box')

const questions = [
  {
    question: 'Firetruck',
    color: 'red',
    answer: 'Idaho',
    complete: false
  },
  {
    question: 'Orange',
    color: 'orange',
    answer: 'Wisconsin',
    complete: false
  },
  {
    question: 'Poop',
    color: 'brown',
    answer: 'Illinois',
    complete: false
  }
]

answerOne.addEventListener('click', function () {
  answerOneCheckbox.style.backgroundColor = 'red'
  this.style.color = 'grey'
})

answerTwo.addEventListener('click', function () {
  answerTwoCheckbox.style.backgroundColor = 'green'
  this.style.color = 'green'

})

answerThree.addEventListener('click', function () {
  answerThreeCheckbox.style.backgroundColor = 'red'
  this.style.color = 'grey'

})