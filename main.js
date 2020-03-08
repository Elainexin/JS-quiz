
var UserAnswers =[];
var CorrectAnswers =[2,2,1,0,1,2,3,2,1,3];
var current=0;
var total =10;
var correct = 0;
function nextquestion(action){
	if(current > 0)
	{
		document.getElementById("ques"+current).style.display = "none";
    }
    if (action==1){
        current++;
    } else {
        current--;
    }
	if(current == 0)
	{
		current = 1;
	}
	if(current > total)
	{
		current = total;
	}
    document.getElementById("ques"+current).style.display = "block";
    if (current == total){
        document.getElementById("next").disabled="disabled";
        // document.getElementById("next").style.display="none";
        document.getElementById("endtest").style.visibility="visible";

    }
}
function starttest(){
    document.getElementById('showquesbox').style.display="block";
    $("#testNote").slideUp("6000");
    document.getElementById('starttest').disabled="disabled";
    document.getElementById('starttest').style.display = "none";
    nextquestion(1);
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
    document.getElementById("showquesbox").style.display ="none";
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
    
    document.getElementById("prev").style.display ="none";
    document.getElementById("next").style.display ="none";
    document.getElementById("end").style.display ="none";

    document.getElementById("after_submit").style.display = "";
    document.getElementById("number_correct").innerHTML = "You got " + correct +" questions correct.";
    document.getElementById("message").innerHTML = messages[feedback];
    document.getElementById("picture").src = pictures[feedback];
            
}

function showAll(){
    document.getElementById("showquesbox").style.display ="";
    for (i=0;i<10;i++){  
        j = i+1
        index=UserAnswers[i];
        correcIndex=CorrectAnswers[i];
        document.getElementById("ques"+j).style.display="";
        document.getElementById('ques'+j).getElementsByClassName('choice')[correcIndex].style.border="1px solid green";
        if(index==correcIndex){
            document.getElementById('ques'+j).getElementsByClassName('choice')[index].style.color="green";
        } else{
            if (document.getElementsByName("question"+j)[index]){
                document.getElementById("ques"+j).getElementsByClassName('choice')[index].style.color ="red";
            }

        }
    }

}

function tryAgain() {
    window.open("index.html", "_self", "");
}