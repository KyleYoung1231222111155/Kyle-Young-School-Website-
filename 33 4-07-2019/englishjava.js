//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"
var qList = [] 
var makequestion = {questiontype: Math.floor((Math.random() * 3)), randomnumber1: Math.floor((Math.random() * 100) + 90), randomnumber2: Math.floor((Math.random() * 90) + 1),randomnumber3: Math.floor((Math.random() * 10) + 1), randomnumber4: Math.floor((Math.random() * 10) - 1),randomnumber5: Math.floor((Math.random() * 10) + 1), randomnumber6: Math.floor((Math.random() * 10) - 1)};
var i = 0;
var j = 0
console.log("hello")

	//$(document).ready(function(){
	//	$(".button").click(function(){
	//	$("h1 , h2 , p").toggleClass("black");
		
	//	});
	//});

Question = function(input1,input2){
	var ras = 0													//ras = right answers, this Variables will go up every time you get a answer is right
	var was = 0													//was = wrong answers, this Variables will go up every time you get a answer is wrong
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
			ras++;
			console.log("How Many Right Answers " + ras);
			document.getElementById("rightanswers").innerHTML = "Right Answers " + ras;
			alert(this.congrats);
			console.log("right answer running")
		} else{
			alert("wrong")
			was++;
			console.log("How Many Wrong Answers " + was);
			document.getElementById("wronganswers").innerHTML = "Wrong Answers " + was;
		}
	}
}


while(i<4){
	console.log(makequestion)
	
	//qList[i] = new Question("2+" + i + "=",2+i);
	//console.log(qList[i])
	qList[0] = new Question("Against each Key word are given four suggested meanings. Choose the word or phrase which is nearest in meaning to key word. ANTAGONIST                                                        1 Hostile                                                        2 Pluralistic                                                        3 Mockery                                                        4 Aghast","hostile","round up");               //this is the Question bank
	console.log("qlist2running");
	qList[1] = new Question("Click Next To Make Work","hostile");
	qList[2] = new Question("Against each Key word are given four suggested meanings. Choose the word or phrase which is nearest in meaning to key word. APPERTAIN                                                        1 Give up                                                        2 Offence                                                        3 To be Appropriate                                                        4 Thankful ","to be appropriate"); 
	qList[3] = new Question("Read the sentence and choose the antonyms of the Underlined Word among the alternative words or phrases as 1,2,3 and 4.    The superintendent looked very grumpy.                                                        1 Surly                                                        2 Pleassant                                                        3 Effcient                                                        4 Honest","pleassant");
	i++;
}

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
	if (str == ""){
		alert("Put A Answer Into the Text Box")
		startagain()
		stop
	}else{
		qList[j].check(str);
		j++;
		getquestion(j);
	}
}

function getquestion(n){
	console.log("mymathrunning")
	document.getElementById("next").innerHTML = "Next Question"
	document.getElementById("askmath").innerHTML = qList[n].qtext							//this look and reads the fist item in the array list in the question bank and puts it in the html
	if (n==0){
		document.getElementById("askmath").onclick = "";
	}
}

function givehint(){
	
}