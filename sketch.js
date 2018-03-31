var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "london";
var apikey = "&APPID=8cb78fc2fbb2a50e56084de4da5de7f2";
var units = "&units=metric";

function setup() {
	createCanvas(400, 200);


	var button = select('#submit');
	button.mousePressed(askWehter);

	var key = select('#submit');

	input = select('#city')
}


function gotData(data) {
	weather = data;
}

function askWehter() {
	var url = api + input.value() + apikey + units;
	loadJSON(url, gotData);
}



function draw() {
	background(0, 255, 250);
	textSize(20);

	function keyPressed() {
		console.log("hello")

	}

	if (weather) {
		var temp = weather.main.temp;
		var humidity = weather.main.humidity;
		ellipse(100, 100, temp, temp);
		text("Temperatur", 60, 30)
		text(temp + '°C', 60, 180)
		ellipse(300, 100, humidity, humidity);
		text("Luftfuktighet", 270, 30)
		text(humidity + "%", 270, 180)
	}
}


function keyPressed() {
	if (keyCode === ENTER) {
	  askWehter();
	}
  }