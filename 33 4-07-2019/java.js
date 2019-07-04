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
	var type = {questionpart1: "If there is ", questionpart2: " people where on a plane ", questionpart3: " people left, how many got off?"}
	var type1 = {questionpart1: "A Pride(Group of lions) has ", questionpart2: " And ", questionpart3: " Lions Join How many lions are there"}
	
	if (makequestion.questiontype == 0){var change = type
	}else{
		var change = type1}
	if (makequestion.questiontype == 0){var answer = makequestion.randomnumber1-makequestion.randomnumber2
	}else{
		var answer = makequestion.randomnumber1+makequestion.randomnumber2}
	
	var type2 = {questionpart1: "There Are ", questionpart2: " Firework in a box. Sam Has ", questionpart3: " How Many fireworks dose he have?"}
	var type3 = {questionpart1: "Ben Whats to buy ", questionpart2: " Lollies for each of his ", questionpart3: " friends. How Many lollies will he need to buy?"}
	
	if (makequestion.questiontype == 0){var change2 = type2
	}else{
		var change2 = type3}
	if (makequestion.questiontype == 0){var answer2 = makequestion.randomnumber3*makequestion.randomnumber4
	}else{
		var answer2 = makequestion.randomnumber3*makequestion.randomnumber4}
	
	var type4 = {questionpart1: "A Shop has a piece of ribbon that is ", questionpart2: "m long. They need to divide the ribbon into ", questionpart3: " equal pieces. How long will each piece of ribbon be? "}
	var type5 = {questionpart1: "Tom Has ", questionpart2: " friends over for his birthday tea. Mum Cook ", questionpart3: " fish fingers each. How Many fish fingers dose Tom's mum have to buy for his friends?"}
	
	if (makequestion.questiontype == 0){var change3 = type4
	}else{
		var change3 = type5}
	if (makequestion.questiontype == 0){var answer3 = makequestion.randomnumber5/makequestion.randomnumber6
	}else{
		var answer3 = makequestion.randomnumber5*makequestion.randomnumber6}
	


	//qList[i] = new Question("2+" + i + "=",2+i);
	//console.log(qList[i])
	qList[0] = new Question(change.questionpart1 + makequestion.randomnumber1 + change.questionpart2 + makequestion.randomnumber2 + change.questionpart3,makequestion.randomnumber1-makequestion.randomnumber2,"round up");               //this is the Question bank
	console.log("qlist2running");
	qList[1] = new Question("Click Next To Make Work",answer);
	qList[2] = new Question("When a grizzly bear hibernates, its heart rate drops to 10 beats per minute, which is 20%, percent of its normal value.    What is a grizzly bear's normal heart rate when not hibernating?","50"); 
	qList[3] = new Question(change2.questionpart1 + makequestion.randomnumber3 + change2.questionpart2 + makequestion.randomnumber4 + change2.questionpart3,answer2);
	qList[4] = new Question(change3.questionpart1 + makequestion.randomnumber5 + change3.questionpart2 + makequestion.randomnumber6 + change3.questionpart3,answer2);
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
