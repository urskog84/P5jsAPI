var weather;
var giphyData;
var mapsDatav
var mapTemp
var address

var api = "https://api.openweathermap.org/data/2.5/weather?q=";

var apikey = "&APPID=8cb78fc2fbb2a50e56084de4da5de7f2";
var units = "&units=metric";


var mapsApi = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

var mapsApiKey = "&key=AIzaSyCm1so2fwqc49tgT-2lqhvxW4jk1fJ39-k";



function setup() {
	createCanvas(400, 300);


	var button = select('#submit');
	button.mousePressed(askWehter);

	var key = select('#submit');
	input = select('#city')
}

function askWehter() {
	var url = api + input.value() + apikey + units;
	loadJSON(url, gotWeatherData);
}


function gotWeatherData(data) {
	weather = data;
	askMaps();
}

function askMaps() {
	var url = mapsApi + weather.coord.lat + "," + weather.coord.lon + mapsApiKey;
	loadJSON(url, gotMapsData);
}

function gotMapsData(data) {
	mapsData = data;
}


function draw() {
	background(0, 255, 250);
	textSize(20);

	if (weather) {
		var temp = weather.main.temp;
		var humidity = weather.main.humidity;
		var address = mapsData.results[0].formatted_address
		fill(43, 188, 62);
		ellipse(100, 100, (temp + 30), (temp + 30));
		text("Temperatur", 60, 30)
		text(temp + '°C', 60, 180)
		fill(244, 66, 194);
		ellipse(300, 100, humidity, humidity);
		text("Luftfuktighet", 270, 30)
		text(humidity + "%", 270, 180)
		textSize(15)
		text(address, 30, 240);


	}
}



function keyPressed() {
	if (keyCode === ENTER) {
		askWehter();

	}
}

