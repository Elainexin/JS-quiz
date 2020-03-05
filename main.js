
var UserAnswers =[];
var CorrectAnswers =[2,2,1,0,1,2,3,2,1,3];


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
    var correct = 0;
    // store user answers and check marks;
    for (i=0;i<10;i++){  
        j = i+1
        UserAnswers[i]= checkRadio("question"+j);
        if(UserAnswers[i]==CorrectAnswers[i]){
            correct++;
        }
    }
    // if (document.getElementsByName("question1")[2].checked){
    //     correct++;
    // }
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