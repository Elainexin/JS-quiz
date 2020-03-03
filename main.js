


function nextquestion(){
	current = document.getElementById("current_show_ques").value;
	total = document.getElementById('total_question').value;
	if(current > 0)
	{
		document.getElementById("ques"+current).style.display = "none";
	}
	
    current = parseInt(current)+1;
    
	if(current == 0)
	{
		current = 1;
	}
	if(current > total)
	{
		current = total;
	}
    document.getElementById("ques"+current).style.display = "block";

    
    document.getElementById("current_show_ques").value = current;
    if (current == total){
        document.getElementById("next").disabled="disabled";
        document.getElementById("next").style.display="none";
        document.getElementById("endtest").style.visibility="visible";

    }
}
function starttest(){
 
    document.getElementById('showquesbox').style.display="block";
    $("#testNote").slideUp("6000");
    document.getElementById('starttest').disabled="disabled";
    document.getElementById('starttest').style.display = "none";
    nextquestion();
}



function checkRadio(questionID){
    var val;
    var questionList = document.getElementsByName(questionID);
    // loop through list of radio buttons
    for (var i=0, len=questionList.length; i<len; i++) {
        if ( questionList[i].checked ) { // radio checked?
            val = questionList[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val;

}

function checkAnswers(){
    var question1 = checkRadio("question1");
    var question2 = checkRadio("question2");
    var question3 = checkRadio("question3");
    var question4 = checkRadio("question4");
    var question5 = checkRadio("question5");
    var question6 = checkRadio("question6");
    var question7 = checkRadio("question7");
    var question8 = checkRadio("question8");
    var question9 = checkRadio("question9");
    var question10 = checkRadio("question10");
    var correct = 0;
    if (question1 == 2){
        correct++;
    }
    if (question2 == 2){
        correct++;
    }
    if (question3 == 1){
        correct++;
    }
    if (question4 == 0){
        correct++;
    }
    if (question5 == 1){
        correct++;
    }
    if (question6 == 2){
        correct++;
    }
    if (question7 == 3){
        correct++;
    }
    if (question8 == 2){
        correct++;
    }
    if (question9 == 1){
        correct++;
    }
    if (question10 == 3){
        correct++;
    }
    var messages = ["Good Job! You Know Canada very well!", "Not Bad! Do better next time!", "Oops...Try it Again!"];
    var pictures = ["img/win.gif","img/meh.gif","img/lose.gif"]
    var feedback;
    
    if (correct == 10){
        feedback = 0;
    } else if (correct >=6){
        feedback =1;
    } else {
        feedback =2;
    }
    document.getElementById("showquesbox").style.display ="none";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "You got " + correct +" questions correct.";
    document.getElementById("message").innerHTML = messages[feedback];
    document.getElementById("picture").src = pictures[feedback];
  

}

function showAll(){
    window.open("result.html","_self","");
}