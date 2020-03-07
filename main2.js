
var UserAnswers = [];
// var CorrectAnswers =[2,2,1,0,1,2,3,2,1,3];
var CorrectAnswers = [];
var current = 0;
var quesData = [
    {
        ques: "What are Canada's official languages?",
        choices: ["A. English and Acadian", "B. French, English and Michif", "C. English and French", "D. French, English and Inuktitut"],
        answ: 2
    },
    {
        ques: "What's the only official bilingual province in Canada?",
        choices: ["A. Quebec", "B. Ontari", "C. New Brunswic", "D. Manitoba"],
        answ: 2
    },
    {
        ques: "Which province has its own time zone?",
        choices: ["A. British Columbia", "B. Newfoundland and Labrador", "C. Nova Scotia", "D. Nunavut"],
        answ: 1
    }
]
var total = quesData.length;
var correct = 0;

function createChoices(action){
    input = document.createElement(input);
    input.setAttribute("type","radio");
    input.setAttribute("id","ch0"+current);
    input.setAttribute("name","ques"+current);


}


function nextquestion(action) {
    if (action == 1) {
        current++;
    } else {
        current--;
    }
    // checked or not
    // answeredNum=UserAnswers.length;
    // if (current<=answeredNum && current >0){
    //     // set previous checked answer
    //     prevChoice=UserAnswers[current-1];
    //     document.getElementsByName("choices")[prevChoice].checked = true;
    // } 


    document.getElementById("number").innerHTML = current + ". ";
    document.getElementById("question").innerHTML = quesData[current - 1].ques;
    for (i = 0; i < 4; i++) {
        document.getElementById("label" + i).innerHTML = quesData[current - 1].choices[i];
    }
    // store user choices and correct answers 
    if (action==1){
        if (current > 1) {
            k = current - 2;
            UserAnswers[k] = checkRadio("choices");
            CorrectAnswers[k] = quesData[k].answ;
        }
    } else{
        UserAnswers[current] = checkRadio("choices");
            CorrectAnswers[current] = quesData[current].answ;
    } 




// button display
if (current <= 1) {
    document.getElementById("prev").style.display = "none";
} else {
    document.getElementById("prev").style.display = "block";
}

if (current >= total) {
    document.getElementById("next").style.display = "none";
} else {
    document.getElementById("next").style.display = "block";
}
}
function starttest() {
    document.getElementById('showquesbox').style.display = "block";
    $("#testNote").slideUp("6000");
    document.getElementById('starttest').disabled = "disabled";
    document.getElementById('starttest').style.display = "none";
    nextquestion(1);
}



function checkRadio(questionName) {
    var val;
    var questionList = document.getElementsByName(questionName);
    // loop through list of radio buttons
    for (var i = 0, len = questionList.length; i < len; i++) {
        if (questionList[i].checked) { // radio checked?
            val = questionList[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val;
}

function checkAnswers() {
    var correct = 0;
    // store user answers and check marks;
    for (i = 0; i < 10; i++) {
        j = i + 1
        UserAnswers[i] = checkRadio("question" + j);
        if (UserAnswers[i] == CorrectAnswers[i]) {
            correct++;
        }
    }
    // if (document.getElementsByName("question1")[2].checked){
    //     correct++;
    // }
    var messages = ["Good Job! You Know Canada very well!", "Not Bad! Do better next time!", "Oops...Try it Again!"];
    var pictures = ["img/win.gif", "img/meh.gif", "img/lose.gif"]
    var feedback;

    if (correct == 10) {
        feedback = 0;
    } else if (correct >= 6) {
        feedback = 1;
    } else {
        feedback = 2;
    }
    document.getElementById("showquesbox").style.display = "none";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct + " questions correct.";
    document.getElementById("message").innerHTML = messages[feedback];
    document.getElementById("picture").src = pictures[feedback];
}

function showAll() {
    window.open("result.html", "_self", "");
}