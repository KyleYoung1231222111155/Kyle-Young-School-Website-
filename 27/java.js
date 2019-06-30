//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"



var j = 0


console.log("hello")

	//$(document).ready(function(){
	//	$(".button").click(function(){
	//	$("h1 , h2 , p").toggleClass("black");
		
	//	});
	//});
	


Question = function(){
	console.log("making question is runing")
	var makequestion = {questiontype: Math.floor((Math.random() * 3)), randomnumber1: Math.floor((Math.random() * 100) + 1), randomnumber2: Math.floor((Math.random() * 100) + 1)};
	this.textboxtrim = function(){
				var str =	document.getElementById("textbox").value;
				console.log(document.getElementById("textbox").value);	
				str = str.trim();	
				console.log(str);														//this checks the value of the text and reads it and looks at the answer and see if it is right 
				console.log("mark running");
				console.log(str)
				str = str.toLowerCase();
				console.log(str);
	}
	this.getrightanswer = function(){
			if (makequestion.pickquestion == 0) {	
				var answer = makequestion.randomnumber1 + makequestion.randomnumber2;
				console.log(answer)
						} else if (makequestion.pickquestion == 1) {	
							var answer = makequestion.randomnumber1 * makequestion.randomnumber2;
							console.log(answer)
								} else if (makequestion.pickquestion == 2){
									var answer = makequestion.randomnumber1 - makequestion.randomnumber2;
										console.log(answer)
			}		
		} 
	this.cheak = function(){
		var ras = 0													//ras = right answers, this Variables will go up every time you get a answer is right
		var was = 0													//was = wrong answers, this Variables will go up every time you get a answer is wrong
		if(str == answer){
			console.log("good work")
				ras++
				document.getElementById("rightanswers").innerHTML = "Right Answer" + ras 
				alert("Good Work")
					}else{
						was++
						alert("wrong")
						document.getElementById("wronganswers").innerHTML = "Wrong Answer" + was
		}
	this.questiontext = function(){
			if(makequestion.pickquestion == 0){
				var qlist = {part1:"Whats this ", part2:" + ", part3:""}
					document.getElementById("askmath").innerHTML = qlist.part1 + randomnumber1 + qlist.part2 + randomnumber2 + qlist.part3;
		
				} else if (makequestion.pickquestion == 1) {	
						var qlist = {part1:"Whats this ", part2:" x ", part3:""}
						document.getElementById("askmath").innerHTML = qlist.part1 + randomnumber1 + qlist.part2 + randomnumber2 + qlist.part3;
	
						} else if (makequestion.pickquestion == 2){
								var qlist = {part1:"Whats this ", part2:" - ", part3:""};
								document.getElementById("askmath").innerHTML = qlist.part1 + randomnumber1 + qlist.part2 + randomnumber2 + qlist.part3;
			}
	
		}
	}
	
	

	function getquestion(){
	new Question.questiontext
	console.log(pickquestion)
	//console.log(randimlist)
	document.getElementById("next").innerHTML = "Next Math Questions";
	console.log(makequstion.randomnumber1);
	console.log(makequstion.randomnumber2);
}



	function mark(){
		Question.getrightanswer.textboxtrim.cheak
	}

