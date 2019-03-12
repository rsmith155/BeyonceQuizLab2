

//function called when quiz is submitted
function check(){
    //sets variables to equal the selected answers
	var question1 = document.quiz.Q1.value;
	var question2 = document.quiz.Q2.value;
	var question3 = document.quiz.Q3.value;
	var question4 = document.quiz.Q4.value;
	var question5 = document.quiz.Q5.value;
	var question6 = document.quiz.Q6.value;
	var correct = 0;
	var wrong = [];

//increments correct based on correct answers

	if (question1 == "Virgo") {
		correct++;
}   else {
	     wrong.push("1");
	 }

	if (question2 == "Houston, TX") {
		correct++;
}   else  {
	wrong.push("2");
}
	
	if (question3 == "Hot Sauce") {
		correct++;
}   else  {
	wrong.push("3")
}
	if (question4 == "2003") {
		correct++;
}   else {
	wrong.push("4");
}

	if (question5 == "Blue Ivy, Rumi and Sir") {
		correct++;
}	else {
	wrong.push("5");
}
	if (question6 == "Beyonce, Lativia, Nicky, Ashley, Nina, Kelly") {
		correct++;
} else {
	wrong.push("6");
}
	

//lists to hold different videos, titles and messages	
	
	var vids = ["https://www.youtube.com/embed/-FjG5dI_d5c?enablejsapi=1", "https://www.youtube.com/embed/IyuUWOnS9BY?enablejsapi=1","https://www.youtube.com/embed/4S37SGxZSMc?enablejsapi=1","https://www.youtube.com/embed/XQtoCz9dIJQ?enablejsapi=1"];
	var messages = ["Welcome to the illustrious Alpha chapter of BAK. You are clearly a Beyonce STAN and WORTHY of the black and gold. Stay in formation, make err'body mad. ", "You wake up…Flawless. Post up...Flawless. Your quiz score...(nearly) Flawless. You know enough to stand by the Beyhive and not get stung.", " To My dearest Michelle, youve left Destinys Child and are on your way to stardom, but you have a long way to go.", "Hey, farrah :("];
	var titles = ["BΔK (Alpha Chapter)","Beyhive Adjacent","A Child of Destiny","Destinys (Disowned)Step-Child"]
	var songs = ["'Everybody Mad'", "'***Flawless'", "'Me, Myself and I'", "'No,No,No,No Pt.1'"]
	var score;

	//calculates score that corresponds to the list index of answers based on # of correct answers
	if (correct <=2) {
		score = 3;
	}

	if (correct == 3) {
		score = 2;
	}

	if (correct > 3 && correct < 6) {
		score = 1;
	}

	if (correct == 6) {
		score = 0;
	}

  
	//change and display results
	document.getElementById("existing-iframe").src=vids[score];
	document.getElementById("cresult").style.display="block";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = titles[score];
	document.getElementById("song").innerHTML="Your song is " + songs[score];
	document.getElementById("preamble").innerHTML = "You are...";

	//smooth scrolling when answer is revealed
	var element = document.getElementById("cresult");
	element.scrollIntoView({ behavior: 'smooth' });
	console.log(wrong)

	
	}
	

			
			
