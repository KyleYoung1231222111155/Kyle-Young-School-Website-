//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"



var ras = 0													//ras = right answers, this Variables will go up every time you get a answer is right

var was = 0													//was = wrong answers, this Variables will go up every time you get a answer is wrong



console.log("hello")

	//$(document).ready(function(){
	//	$(".button").click(function(){
	//	$("h1 , h2 , p").toggleClass("black");
		
	//	});
	//});

	

function mark() {
	var str =	document.getElementById("textbox").value;
	console.log(document.getElementById("textbox").value);	
	str = str.trim();	
	console.log(str);														//this checks the value of the text and reads it and looks at the answer and see if it is right 
	console.log("mark running");
	console.log(str)
	str = str.toLowerCase();
	console.log(str);
		if(str == answer){
			console.log("good work")
		}
}



function mymath(){
	var pickquestion = Math.floor((Math.random() * 2));
	var randomnumber1 = Math.floor((Math.random() * 100) + 1);
	var randomnumber2 = Math.floor((Math.random() * 100) + 1);
	//var randomlist = Math.floor((Math.random() * 2));
	
	console.log(pickquestion)
	//console.log(randimlist)
	document.getElementById("next").innerHTML = "Next Math Questions";
	console.log(randomnumber1)
	console.log(randomnumber2)
	if(pickquestion == 0){
		
		var answer = randomnumber1 + randomnumber2;
		console.log(answer)
		var qlistaddpart1 = ["Whats this "]
		var qlistaddpart2 = [" + "]
		document.getElementById("askmath").innerHTML = qlistaddpart1 + randomnumber1 + qlistaddpart2 + randomnumber2;
		
	} else if (pickquestion == 1) {
		
		var answer = randomnumber1 * randomnumber2;
		console.log(answer)
		var qlistaddpart1 = ["Whats this "]
		var qlistaddpart2 = [" x "]
		document.getElementById("askmath").innerHTML = qlistaddpart1 + randomnumber1 + qlistaddpart2 + randomnumber2;
		
	} else if (pickquestion < 2){
		
	}
}