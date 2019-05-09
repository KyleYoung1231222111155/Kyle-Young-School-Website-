console.log("hello")

Question = function(input1,input2){

	this.qtext = input1;
	var answer = input2;
	this.congrats = "Well done! It is " + answer + "!";
	console.log("runningask")
	this.check = function(givenAnswer){
		if(givenAnswer == answer){
			alert(this.congrats);
			console.log("right answer running")
		} else{
			alert("wrong")
		}
	}
}

var qList = [] 

var i = 0;

while(i<10){
	//qList[i] = new Question("2+" + i + "=",2+i);
	//console.log(qList[i])
	qList[0] = new Question("Round The Folling Answers to the Stated number of Decimal places 4.763(1dp)","5");               //this is the Question bank
	console.log("qlist2running");
	qList[1] = new Question("When a grizzly bear hibernates, its heart rate drops to 10 beats per minute, which is 20%, percent of its normal value.    What is a grizzly bear's normal heart rate when not hibernating?","50");
	qList[2] = new Question("6 box can hold 36 books what is the ratio book per box","36:6"); 
	qList[3] = new Question("6 box can hold 36 books what is the rate book per box","6"); 
	qList[4] = new Question("What is 25% of 908?","227"); 
	qList[5] = new Question("15+(52)=","-37"); 
	qList[6] = new Question("77-(62)=","139"); 
	i++;
}
var j = 0
function mark() {
	console.log("mark running");
	console.log(document.getElementById("textbox").value);
	qList[j].check(document.getElementById("textbox").value);
	j++;
	mymath(j);
}

function mymath(n){
	console.log("mymathrunning")
	document.getElementById("askmath").innerHTML = qList[n].qtext
	if (n==0){
		document.getElementById("askmath").onclick = "";
	}
}