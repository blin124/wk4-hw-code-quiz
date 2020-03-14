// div vars for each question "page"
var stepOne = document.getElementById("stepOne");
var stepTwo = document.getElementById("stepTwo");
var stepThree = document.getElementById("stepThree");
var stepFour = document.getElementById("stepFour");
var stepFive = document.getElementById("stepFive");
var stepSix = document.getElementById("stepSix");
var stepSeven = document.getElementById("stepSeven");
var highscores = document.getElementById("highscores");

// var step 2 buttons
var stepTwoOne = document.getElementById("stepTwo-1");
var stepTwoTwo = document.getElementById("stepTwo-2");
var stepTwoThree = document.getElementById("stepTwo-3");
var stepTwoFour = document.getElementById("stepTwo-4");

// var step 3 buttons
var stepThreeOne = document.getElementById("stepThree-1");
var stepThreeTwo = document.getElementById("stepThree-2");
var stepThreeThree = document.getElementById("stepThree-3");
var stepThreeFour = document.getElementById("stepThree-4");

// var step 4 buttons
var stepFourOne = document.getElementById("stepFour-1");
var stepFourTwo = document.getElementById("stepFour-2");
var stepFourThree = document.getElementById("stepFour-3");
var stepFourFour = document.getElementById("stepFour-4");

// var step 5 buttons
var stepFiveOne = document.getElementById("stepFive-1");
var stepFiveTwo = document.getElementById("stepFive-2");
var stepFiveThree = document.getElementById("stepFive-3");
var stepFiveFour = document.getElementById("stepFive-4");

// var step 6 buttons
var stepSixOne = document.getElementById("stepSix-1");
var stepSixTwo = document.getElementById("stepSix-2");
var stepSixThree = document.getElementById("stepSix-3");
var stepSixFour = document.getElementById("stepSix-4");

// var step 7 buttons
var stepSevenOne = document.getElementById("stepSeven-1");
var initials = document.getElementById("input");

// var for highscores page buttons
var goBack = document.getElementById("stepLast-1");
var clear = document.getElementById("stepLast-2");

// var for correct and wrong
var correct = document.querySelector(".correct")
var wrong = document.querySelector(".wrong")

// var for final score taken from remaining timer
var finalScore = document.getElementById("finalScore");

// var for timer
var time = document.getElementById("time");

// var for countdown
var secondsRemaining = 60;
var quizTimer;

// divs steps 
// Step 1
stepOne.addEventListener("click", function() {
    stepOne.setAttribute("class", "hidden");
    stepTwo.setAttribute("class", "visible")
    quizTimer = setInterval(function(){
        secondsRemaining -- ;
        time.textContent = secondsRemaining;
    }, 1000)
    
});

function removefeedback() {
    setTimeout(function(){
        correct.setAttribute("class", "hidden");
        wrong.setAttribute("class", "hidden");
    }, 2000)
}

// Step 2, buttons 1-4 eventlistener
stepTwoOne.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepThree.setAttribute("class", "visible");
    stepTwo.setAttribute("class", "hidden")
    removefeedback();
}) 

stepTwoTwo.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepThree.setAttribute("class", "visible");
    stepTwo.setAttribute("class", "hidden");
    removefeedback();
})
stepTwoThree.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepThree.setAttribute("class", "visible");
    stepTwo.setAttribute("class", "hidden");
    removefeedback();
})
stepTwoFour.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepThree.setAttribute("class", "visible");
    stepTwo.setAttribute("class", "hidden");
    removefeedback();
})

// Step 3, buttons 1-4 eventlistener
stepThreeOne.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepFour.setAttribute("class", "visible");
    stepThree.setAttribute("class", "hidden");
    removefeedback();
})
stepThreeTwo.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepFour.setAttribute("class", "visible");
    stepThree.setAttribute("class", "hidden");
    removefeedback();
})
stepThreeThree.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepFour.setAttribute("class", "visible");
    stepThree.setAttribute("class", "hidden");
    removefeedback();
})
stepThreeFour.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepFour.setAttribute("class", "visible");
    stepThree.setAttribute("class", "hidden");
    removefeedback();
})

// Step 4, buttons 1-4 eventlistener
stepFourOne.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepFive.setAttribute("class", "visible");
    stepFour.setAttribute("class", "hidden");
    removefeedback();
})
stepFourTwo.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepFive.setAttribute("class", "visible");
    stepFour.setAttribute("class", "hidden");
    removefeedback();
})
stepFourThree.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepFive.setAttribute("class", "visible");
    stepFour.setAttribute("class", "hidden");
    removefeedback();
})
stepFourFour.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepFive.setAttribute("class", "visible");
    stepFour.setAttribute("class", "hidden");
    removefeedback();
})

// Step 5, buttons 1-4 eventlistener
stepFiveOne.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSix.setAttribute("class", "visible");
    stepFive.setAttribute("class", "hidden");
    removefeedback();
})
stepFiveTwo.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSix.setAttribute("class", "visible");
    stepFive.setAttribute("class", "hidden");
    removefeedback();
})
stepFiveThree.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepSix.setAttribute("class", "visible");
    stepFive.setAttribute("class", "hidden");
    removefeedback();
})
stepFiveFour.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSix.setAttribute("class", "visible");
    stepFive.setAttribute("class", "hidden");
    removefeedback();
})

function myStopFunction() {
    var secondsRemaining = 0
    if(secondsRemaining < 0);{
       clearInterval();
       setTimeout('myStopFunction()', 1000);
    }
    
}

// Step 6, buttons 1-4 eventlistener
stepSixOne.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSeven.setAttribute("class", "visible");
    stepSix.setAttribute("class", "hidden");
    removefeedback();
    clearInterval(quizTimer); 
    finalScore.textContent = secondsRemaining;
})
stepSixTwo.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSeven.setAttribute("class", "visible");
    stepSix.setAttribute("class", "hidden");
    removefeedback();
    clearInterval(quizTimer); 
    finalScore.textContent = secondsRemaining;
})
stepSixThree.addEventListener("click", function(){
    wrong.setAttribute("class", "visible");
    secondsRemaining -= 10; 
    stepSeven.setAttribute("class", "visible");
    stepSix.setAttribute("class", "hidden");
    removefeedback();
    clearInterval(quizTimer); 
    finalScore.textContent = secondsRemaining;
})
stepSixFour.addEventListener("click", function(){
    correct.setAttribute("class", "visible");
    stepSeven.setAttribute("class", "visible");
    stepSix.setAttribute("class", "hidden");
    removefeedback();
    clearInterval(quizTimer); 
    finalScore.textContent = secondsRemaining;
})

var initialsInput = "";

// Step 7 = all done page eventlistener (button for submit)

initials.addEventListener("input", function(){
    initialsInput.textContent = "";
    removefeedback();

    stepSevenOne.addEventListener("click", function(){

        highscores.setAttribute("class", "visible");
        stepSeven.setAttribute("class", "hidden");
    });
});

// Step highscores buttons eventListener
goBack.addEventListener("click", function(){
    window.location.href = "./index.html";
})

clear.addEventListener("click", function(){
    
})

// initials.addEventListener("input", function() {
//     initialsInput.textContent = initials;
//     localStorage.setItem(initialsInput.initials);
//     // localStorage.setItem(initials);
//     stepSevenOne.addEventListener("click", function(){
//         correct.setAttribute("class", "hidden");
//         wrong.setAttribute("class", "hidden");
//         // var window = window.open("./02-Homework/highscore.html", windowName, [windowFeatures]);
//         window.location.href = "./highscore.html";
        
//     });
//     // console.log(window);
// });
// // console.log(initials.textContent = "input");

