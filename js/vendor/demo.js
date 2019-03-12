

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
	var facts =[" Beyoncé was born on September 4, 1981 (as she whispers in the intro to 'Get Me Bodied'). According to the Astro Twins, she was born at 10 AM, which makes her a Virgo sun with a Scorpio moon and Libra rising.",
	" Beyoncé Giselle Knowles is from Houston, Texas.", " As quoted from her song “Formation,” she carries hot-sauce in her purse, a must have for a southerner in need of spice at any given time.", " She released her first solo album, Dangerously in Love (2003), during the hiatus of Destiny's Child."];
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
	document.getElementById("information").innerHTML="Here are some facts. ";

	for (var property1 in wrong) {
		console.log(property1)
  document.getElementById("information").appendChild([wrong[property1-1]]);
}


	document.getElementById("preamble").innerHTML = "You are...";


	//smooth scrolling when answer is revealed
	var element = document.getElementById("cresult");
	element.scrollIntoView({ behavior: 'smooth' });
	console.log(wrong)

	
	}
	

			
			
