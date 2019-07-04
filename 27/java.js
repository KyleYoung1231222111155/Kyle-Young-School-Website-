//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

console.log("hello")

	//$(document).ready(function(){
	//	$(".button").click(function(){
	//	$("h1 , h2 , p").toggleClass("black");
		
	//	});
	//});

Question = function(input1,input2){

	this.qtext = input1;
	var answer = input2;
	this.congrats = "Well done! It is " + answer + "!";                        //this is how it replays to how if you get it right or wrong
	console.log("runningask")
	console.log(answer)
	this.check = function(givenAnswer){
		console.log("Check is runing")
		console.log(givenAnswer)
		console.log(answer)
		if(givenAnswer == answer){
			alert(this.congrats);
			console.log("right answer running")
		} else{
			alert("wrong")
		}
	}
}

var qList = [] 
var makequestion = {questiontype: Math.floor((Math.random() * 3)), randomnumber1: Math.floor((Math.random() * 100) + 90), randomnumber2: Math.floor((Math.random() * 90) + 1)};
var i = 0;



while(i<10){
	var type = {questionpart1: "If there is ", questionpart2: " on a plane ", questionpart3: " how many got off."}
	var type1 = {questionpart1: "A Pride(Group of lions) has ", questionpart2: " And ", questionpart3: " Lions Join How many lions are there"}
	
	if (makequestion.questiontype == 0){var change = type}else{var change = type1}
	if (makequestion.questiontype == 0){var answer = makequestion.randomnumber1-makequestion.randomnumber2}else{var answer = makequestion.randomnumber1+makequestion.randomnumber2}
	//qList[i] = new Question("2+" + i + "=",2+i);
	//console.log(qList[i])
	qList[0] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,"round up");               //this is the Question bank
	console.log("qlist2running");
	qList[1] = new Question("skip",answer);
	qList[2] = new Question("When a grizzly bear hibernates, its heart rate drops to 10 beats per minute, which is 20%, percent of its normal value.    What is a grizzly bear's normal heart rate when not hibernating?","50"); 
	qList[3] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer); 
	qList[4] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer); 
	qList[5] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer); 
	qList[6] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer); 
	qList[7] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer);
	qList[8] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,answer);
	qList[9] = new Question("The number of people on a plane was 280. If 40% of the people got off. How many were left?","112");
	qList[10] = new Question("√225",15);
	qList[11] = new Question("√225",15);
	i++;
}
var j = 0
function mark() {
	var makequestion
	console.log("mark running");
	console.log(document.getElementById("textbox").value);									//this checks the value of the text and reads it and looks at the answer and see if it is right 
	var str =	document.getElementById("textbox").value;
	str = str.trim();	
	console.log(str);														//this checks the value of the text and reads it and looks at the answer and see if it is right 
	console.log("mark running");
	console.log(str)
	str = str.toLowerCase();
	console.log(str);
	qList[j].check(str);
	j++;
	getquestion(j);
}

function getquestion(n){
	console.log("mymathrunning")
	document.getElementById("askmath").innerHTML = qList[n].qtext							//this look and reads the fist item in the array list in the question bank and puts it in the html
	if (n==0){
		document.getElementById("askmath").onclick = "";
	}
}

function givehint(){
	
}