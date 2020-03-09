
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



// create radio input boxes 
function createChoices() {
    for (i = 0; i < 4; i++) {
        input = document.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("id", "ch" + i + current);
        input.setAttribute("name", "ques" + current);
        input.setAttribute("value", i);
        label = document.createElement("label");
        label.setAttribute("id", "label" + i + current);
        label.setAttribute("for", "ch" + i + current);
        var lastQues = document.getElementById('choice' + i);
        while (lastQues.hasChildNodes()) {
            lastQues.removeChild(lastQues.firstChild);
        }
        document.getElementById('choice' + i).appendChild(input);
        document.getElementById('choice' + i).appendChild(label);
    }
}

function nextquestion() {

    current++;
    // store user choices and correct answers 

    if (current > 1) {
        k = current - 2;
        j = current - 1;
        UserAnswers[k] = checkRadio("ques" + j);
        CorrectAnswers[k] = quesData[k].answ;
    }

    // clear and create input radio and label
    createChoices();
    document.getElementById("number").innerHTML = current + ". ";
    document.getElementById("question").innerHTML = quesData[current - 1].ques;
    for (i = 0; i < 4; i++) {
        document.getElementById("label" + i + current).innerHTML = quesData[current - 1].choices[i];
    }

    // button display
    if (current >= total) {
        document.getElementById("next").style.display = "none";
        document.getElementById("endtest").style.visibility="visible";
    } else {
        document.getElementById("next").style.display = "";
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
    // store the last chice and correct answers 
        k = current - 1;
        UserAnswers[k] = checkRadio("ques" + current);
        CorrectAnswers[k] = quesData[k].answ;
    // check marks;
    for (i = 0; i < UserAnswers.length; i++) {
        if (UserAnswers[i] == CorrectAnswers[i]) {
            correct++;
        }
    }

    var messages = ["Good Job! You Know Canada very well!", "Not Bad! Do better next time!", "Oops...Try it Again!"];
    var pictures = ["../img/win.gif", "../img/meh.gif", "../img/lose.gif"]
    var feedback;

    if (correct == total) {
        feedback = 0;
    } else if (correct > total/2) {
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
    window.open("index2.html", "_self", "");
}