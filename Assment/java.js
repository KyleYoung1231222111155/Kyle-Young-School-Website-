//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"



var ras = 0													//ras = right answers, this Variables will go up every time you get a answer is right

var was = 0													//was = wrong answers, this Variables will go up every time you get a answer is wrong

var qList = ["Whats this "] 

var qlist2 = [" + "]

var answers = Math.random() + getRandomInt(100)

var i = 0;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log("hello")

	//$(document).ready(function(){
	//	$(".button").click(function(){
	//	$("h1 , h2 , p").toggleClass("black");
		
	//	});
	//});

	
Question = function(input1,input2,input3){

	this.qtext = input1;
	var answer = input2;
	this.hint = input3;
	this.congrats = "Well done! It is " + answer + "!";                        //this is how it replays to how if you get it right or wrong
	console.log("runningask")
	this.check = function(givenAnswer){
		if(givenAnswer == answer){
			ras++;
			console.log("How Many Right Answers " + ras);
			alert(this.congrats);
			console.log("right answer running")
		} else{
			alert("wrong")
			was++;
			console.log("How Many Wrong Answers " + was);
		}
	}
}


//while(i<10){
	//qList[i] = new Question("2+" + i + "=",2+i);
	//console.log(qList[i])
	//qList[0] = new Question("Round The Folling Answers to the Stated number of Decimal places 4.763(1dp)","5","round up");               //this is the Question bank
	//console.log("qlist2running");
	//qList[1] = new Question("When a grizzly bear hibernates, its heart rate drops to 10 beats per minute, which is 20%, percent of its normal value. What is a grizzly bear's normal heart rate when not hibernating?","50","there 60 beats per minute");
	//qList[2] = new Question("6 box can hold 36 books what is the ratio book per box","36:6","Number:Number"); 
	//qList[3] = new Question("6 box can hold 36 books what is the rate book per box","6","How Many Boxs Can Hold 36"); 
	//qList[4] = new Question("What is 25% of 908?","227","Half of 908 is 454"); 
	//qList[5] = new Question("15+(52)=","-37","Negative Number"); 
	//qList[6] = new Question("77-(62)=","139","Positive Number"); 
	//qList[7] = new Question("Work it Out √36","6");
	//qList[8] = new Question("Work It out √225","15");
	//qList[9] = new Question("The number of people on a plane was 280. If 40% of the people got off. How many were left?","112");
	//qList[10] = new Question("√225","15");
	//qList[11] = new Question("√225","15");
	//i++;
	
//}


var j = 0
function mark() {
	var str =	document.getElementById("textbox").value;
	console.log(document.getElementById("textbox").value);	
	str = str.trim();	
	console.log(str);														//this checks the value of the text and reads it and looks at the answer and see if it is right 
	console.log("mark running");
	console.log(str)
	str = str.toLowerCase();
	console.log(str)
	answers.check(str);
	j++;
	mymath(j);
}

function mymath(n){
	console.log("mymathrunning")
	document.getElementById("askmath").innerHTML = qList[0] + Math.random() + qlist2[0] + getRandomInt(100);	
	//document.getElementById("hint").innerHTML = "Your Hint is " + qList[n].hint
	console.log("hintisrunning")																										//this look and reads the fist item in the array list in the question bank and puts it in the html
	document.getElementById("wronganswers").innerHTML = "Wrong Answers " + was
	document.getElementById("rightanswers").innerHTML = "Right Answers " + ras
		if (n==0){
		document.getElementById("askmath").onclick = "";
	}
}

//function givehint(){
	//document.getElementById("hint").innerHTML = "Your Hint is " + qList[j].hint
	//console.log("hintisrunning")
//}
