var triviaQuestions = [{
    question: "Who is the all time leading rusher for the Detroit Lions?",
    answerList: ["Tim Tebow", "John Elway", "Barry Sanders", "Emmit Smith"],
    answer: 3
},
{   
    question: "Who is the Pittsburgh Steelers all time passing leader?",
    answerList: ["Terry Bradshaw", "Ben Roethlisberger", "Jimmy John", "David Knox"],
    answer: 2
},
{
    question: "He hates being called the GOAT?",
    answerList: ["Michael Jordan", "Randy Moss", "Deon Sanders", "Tom Brady"],
    answer: 4
},
{
    question: "He signed a 10-year, $100 million deal with the Raiders",
    answerList: ["Jon Gruden", "Hulk Hogan", "Derek Carr", "Ned Stark"],
    answer: 1
},
{
    question: "Rams leading rusher in 2018",
    answerList: ["Todd Gurley", "Jerome Bettis", "Flipper Anderson", "YG"],
    answer: 1
},
{
    question: "He was named Super Bowl MVP in 1990",
    answerList: ["Dan Marino", "Joe Montana", "Jim Hill", "Lawrence Taylor"],
    answer: 2
},
{
    question: "He was named Rookie of the Year in 1998",
    answerList: ["Robert Duval", "Terrel Owens", "Walter White", "Randy Moss"],
    answer: 4
},
{
    question: "This second year player won MVP in 2018",
    answerList: ["Drew Brees", "Andrew Luck", "Patrick Mahomes", "Jeff Geoff"],
    answer: 3
},
{
    question: "He totaled 1,336 tackles over his career",
    answerList: ["Ray Lewis", "Patrick Willis", "Lawrence Taylor", "Zack Thomas"],
    answer: 1
},
{
    question: "He is a Super Bowl winning cornerback that was born in Compton Ca",
    answerList: ["Deon Sanders", "Darrel Green", "Josh Norman", "Richard Sherman"],
    answer: 4
},
{
    question: "This second year player won MVP in 2018",
    answerList: ["Drew Brees", "Andrew Luck", "Patrick Mahomes", "Jeff Geoff"],
    answer: 3
},
{
    question: "He was a Heisman winning QB that never found a home",
    answerList: ["Doug Flutie", "Tim Tebow", "Maurice Clarett", "Max Mack"],
    answer: 2
},
{
    question: "This man loves cold ceral",
    answerList: ["Refridgerator Perry", "Zeke Elliot", "Cory Carr", "Jimbo Sweeny"],
    answer: 2
}];

var gifArray = ['berry', 'ben', 'brady', 'gruden', 'gurley', 'joe', 'moss', 'pat', 'ray', 'sherman', 'tebow', 'zeke'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Touchdown!",
	incorrect: "Penalty!",
	endTime: "Game Over!",
	finished: "Total Score"
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	
function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	time = setInterval(showCountdown, 1000);
}

	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function score(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
    $('#startOverBtn').html('Start Over?');
}