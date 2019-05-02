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
//qList[0] = new Question("2+2=","4");               //this is the Question bank
//console.log("qlist2running");
//qList[1] = new Question();

var i = 0;
while(i<10){
	qList[i] = new Question("2+" + i + "=",2+i);
	console.log(qList[i])
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
}