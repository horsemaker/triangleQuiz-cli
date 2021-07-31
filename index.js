// import
var readlineSync = require("readline-sync")

// user Input
var angleOne = readlineSync.question("Enter 1st angle: ")

var angleTwo = readlineSync.question("Enter 2nd angle: ")

var angleThree = readlineSync.question("Enter 3rd angle: ")

// angle declaration
var angle1 = 0;
var angle2 = 0;
var angle3 = 0;

var side1 = 0;
var side2 = 0;
var side3 = 0;
// flag
var whichTriangle = 0;

// question number
var questionNo = 0;

// calculating sum
var sumOfAngles = Number(angleOne) + Number(angleTwo) + Number(angleThree)
console.log("Your given angles sum up to ", sumOfAngles, " &")

// giving result
if (sumOfAngles != 180) {
  console.log("Oops! these angles cannot make a triangle")
}


function setQuestionRoundOne() {
  questionNo++

  angle1 = Math.floor((Math.random() * 180) + 1)
  angle2 = Math.floor((Math.random() * 180) + 1)
  angle3 = Math.floor((Math.random() * 180) + 1)

  if (questionNo <= 3) {
    whichTriangle = 1 // obtuse
  }
  else if (questionNo > 3 && questionNo <= 6) {
    whichTriangle = 2 // acute
  }
  else {
    whichTriangle = 3 // right angle
    if (questionNo === 7 || questionNo === 10) {
      angle2 = 90
    }
  }
  
  return "If a triangle has angles " + angle1 + "°, " + angle2 + "°, " + angle3 + "°. Is it an " + (whichTriangle === 1 ? 'obtuse' : (whichTriangle === 2 ? 'acute' : 'right')) + " triangle? "
}

function giveAnswerRoundOne() {
  if (whichTriangle === 1) {
    return (((angle1 > 90 || angle2 > 90 || angle3 > 90) && (angle1 + angle2 + angle3 === 180)) ? 'y' : 'n')
  }
  else if (whichTriangle === 2) {
    return (((angle1 < 90 && angle2 < 90 && angle3 < 90) && (angle1 + angle2 + angle3 === 180)) ? 'y' : 'n')
  }
  else {
    return (((angle1 === 90 || angle2 === 90 || angle3 === 90) && (angle1 + angle2 + angle3 === 180)) ? 'y' : 'n')
  }
}

function roundOne() {
  for (var i = 0; i < 10; i++) {
    var questions =
    {
      question: setQuestionRoundOne(),
      answer: giveAnswerRoundOne(),
    }
    var userAnswer = readlineSync.question(questions.question)

        if (userAnswer.toUpperCase() === questions.answer.toUpperCase()) {
        console.log("You're right! Good Luck ahead :)")
        }
        else {
        console.log("You're wrong! Brush up your basics :)")
        }
  }
}   

function setQuestionRoundTwo() {
  // Missing angle Qs
  questionNo++

  angle1 = Math.floor((Math.random() * 180) + 1)
  angle2 = Math.floor((Math.random() * 10) + 1)

  if (questionNo > 10 && questionNo <= 12) {
    return "If a triangle has angles " + angle1 + "°, " + angle2 + "°. What would be the third angle of the triangle? "
  }
}

function giveAnswerRoundTwo() {
  return angle3 = 180 - angle1 - angle2
}

function roundTwo() {
  for (var i = 0; i < 2; i++) {
    var questions =
    {
      question: setQuestionRoundTwo(),
      answer: giveAnswerRoundTwo(),
    }
    var userAnswer = Number(readlineSync.question(questions.question))
        console.log(questions.answer)
        if (userAnswer === questions.answer) {
        console.log("You're right! Good Luck ahead :)")
        }
        else {
        console.log("You're wrong! Brush up your basics :)")
        }
  }
}

function setQuestionRoundThree() {
  // Isosceles and Equilateral triangle Qs
  questionNo++
  
  if (questionNo == 13) {
    angle1 = 72
    angle2 = 36
    return "If a triangle has angles " + angle1 + "°, " + angle2 + "°. Is it an Isosceles triangle? "
  }
  if (questionNo == 14) {
    angle1 = 120
    angle2 = 30
    return "If an isosceles triangle has angles " + angle1 + "°, " + angle2 + "°. Is it an Isosceles triangle? "
  }
  if (questionNo == 15) {
    side1 = 5
    side2 = 5
    return "If an equilateral triangle has two sides as " + side1 + "units & " + side2 + "units. What would be the length of the third side? "
  }
  if (questionNo == 16) {
    angle1 = 60
    angle2 = 60
    return "If an equilateral triangle has two angles as " + angle1 + "°, " + angle2 + "°. What would be the measure of the third angle of the triangle? "
  }
}

function giveAnswerRoundThree() {
  if (questionNo >= 13 && questionNo <= 14)
  return ((angle3 = 180 - angle1 - angle2) ? 'y' : 'n')
  
  else if (questionNo === 15) {
  return 5  
  }

  else if (questionNo === 16) {
  return 60 
  }
}

function roundThree() {
  for (var i = 0; i < 4; i++) {
    var questions =
    {
      question: setQuestionRoundThree(),
      answer: giveAnswerRoundThree(),
    }
    
    if (questionNo >=13 && questionNo <= 14) {
        var userAnswer = readlineSync.question(questions.question)
            if (userAnswer === questions.answer) {
            console.log("You're right! Good Luck ahead :)")
            }
            else {
            console.log("You're wrong! Brush up your basics :)")
            }
    }
    else {
        var userAnswer = Number(readlineSync.question(questions.question))
            if (userAnswer === questions.answer) {
            console.log("You're right! Good Luck ahead :)")
            }
            else {
            console.log("You're wrong! Brush up your basics :)")
            }
    }      
  }
}

function play() {
  console.log("--------------------")
  console.log("Q&A ROUND I STARTS!!!")
  roundOne()
  console.log("--------------------")
  console.log("Let's begin Q&A ROUND II")
  roundTwo()
  console.log("--------------------")
  console.log("Let's begin Q&A ROUND III")
  roundThree()
}

play()

// Calculator

function calculateHypotenuse() {
  console.log("--------------------")

  var side1 = readlineSync.question("Enter leg 1 of any right-angled triangle: ")
  var side2 = readlineSync.question("Enter leg 2 of that same right-angled triangle: ")

  var hypo = Math.sqrt((side1**2) + (side2**2))
  
  console.log("Hypotenuse = " + hypo) 
}

function calculateArea() {
  console.log("--------------------")

  var side1 = Number(readlineSync.question("Enter a side say side 1 of any triangle: "))
  var side2 = Number(readlineSync.question("Enter another side of that triangle: "))
  var side3 = Number(readlineSync.question("Enter the third side of that triangle: "))

  if ((side1 + side2 > side3) || (side2 + side3 > side1) || (side1 + side3 > side2)) {

    var s = (side1 + side2 + side3)/2
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
    
    console.log("Area of the triangle given sides " + side1 + " units, " + side2 + " units, " + side3 + " units = " + area + " sq.units")
  }
  else {
    console.log("Oops! Not a valid triangle")
  }
  
}

calculateHypotenuse()
calculateArea()
