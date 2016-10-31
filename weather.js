// JavaScript Document


//define the global variables
//current weather URL
var BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q=Vancouver,ca&APPID=29c1cd8150e8ceca854c918862e76523";
var UrlParams = "&units=imperial&type=accurate&mode=json";
// forecast URL
var Forecast_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?id=6173331&APPID=29c1cd8150e8ceca854c918862e76523";
var ForeCast_Params = "&cnt=5&units=imperial&type=accurate&mode=json";
// Image base URL
var IMG_URL = "http://openweathermap.org/img/w/";

/* Initial function call to getweather API for Vancouver */
function getWeather(callback) {
    var weather = 'http://api.openweathermap.org/data/2.5/forecast/daily?id=6173331&APPID=29c1cd8150e8ceca854c918862e76523';
    $.ajax({
      dataType: "jsonp",
      url: weather,
      success: callback,
      maximumAge : 0
    });
}


// get the Current Weather for Vancouver
getWeather (function (data) {
	// Build the OpenAPI URL for current Weather
	var WeatherNowAPIurl = BASE_URL + UrlParams;
	var WeatherForecast_url = Forecast_URL + ForeCast_Params;
	// OpenWeather API call for Current Weather
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var JSONdata = JSON.parse(xmlhttp.responseText);
			Parse(JSONdata);
		}
	}
	xmlhttp.open("GET", WeatherNowAPIurl, true);
	xmlhttp.send();

	// OpenWeather API call for Forecast Weather
	var xmlhr = new XMLHttpRequest();
	xmlhr.onreadystatechange = function() {
		if (xmlhr.readyState == 4 && xmlhr.status == 200) {
			var data = JSON.parse(xmlhr.responseText);
			Forecast(data);
		}
	}
	xmlhr.open("GET", WeatherForecast_url, true);
	xmlhr.send();

})

function Parse(data) {
	// current Location
		document.getElementById("location").innerHTML = "Country :"
			+ data.sys.country + "<br>" + "City:" + data.name + "<br>"
			+ "Latitude:" + data.coord.lat + "<br>" + "Longitude:"
			+ data.coord.lon + "<br>";

	// current weather
	document.getElementById("weatherNow").innerHTML = "<img src='" + IMG_URL
			+ data.weather[0].icon + ".png'> " + "<br>Condition:"
			+ data.weather[0].description + "<br>" + "Temp:" + data.main.temp
			+ " F<br>" + "Humidity:" + data.main.humidity + " hPa <br>"
			+ "Cloudiness:" + data.clouds.all + "% <br>" + "Wind:"
			+ data.wind.speed + " mps <br>";

}
// display forecasts for next 5 Days and display in a table with the  Div ID
function Forecast(data) {
	document.getElementById("day1div").innerHTML = "<img src='" + IMG_URL
			+ data.list[0].weather[0].icon + ".png'> " + "<br>Min Temp:"
			+ data.list[0].temp.min + " F<br>" + "Max Temp:"
			+ data.list[0].temp.max + " F<br>" + "Weather :"
			+ data.list[0].weather[0].description + "<br>" + "Cloudiness:"
			+ data.list[0].clouds + " %<br>" + "Wind:" + data.list[0].speed
			+ " mps <br>";

	document.getElementById("day2div").innerHTML = "<img src='" + IMG_URL
			+ data.list[1].weather[0].icon + ".png'> " + "<br> Min Temp:"
			+ data.list[1].temp.min + " F<br>" + "Max Temp:"
			+ data.list[1].temp.max + " F<br>" + "Weather :"
			+ data.list[1].weather[0].description + "<br>" + "Cloudiness:"
			+ data.list[1].clouds + " %<br>" + "Wind:" + data.list[1].speed
			+ " mps <br>";
	document.getElementById("day3div").innerHTML = "<img src='" + IMG_URL
			+ data.list[2].weather[0].icon + ".png'> " + "<br>Min Temp:"
			+ data.list[2].temp.min + " F<br>" + "Max Temp:"
			+ data.list[2].temp.max + " F<br>" + "Weather :"
			+ data.list[2].weather[0].description + "<br>" + "Cloudiness:"
			+ data.list[2].clouds + " %<br>" + "Wind:" + data.list[2].speed
			+ " mps <br>";
	document.getElementById("day4div").innerHTML = "<img src='" + IMG_URL
			+ data.list[3].weather[0].icon + ".png'> " + "<br>Min Temp:"
			+ data.list[3].temp.min + " F<br>" + "Max Temp:"
			+ data.list[3].temp.max + " F<br>" + "Weather :"
			+ data.list[3].weather[0].description + "<br>" + "Cloudiness:"
			+ data.list[3].clouds + " %<br>" + "Wind:" + data.list[3].speed
			+ " mps <br>";
	document.getElementById("day5div").innerHTML = "<img src='" + IMG_URL
			+ data.list[4].weather[0].icon + ".png'> " + "<br> Min Temp:"
			+ data.list[4].temp.min + " F<br>" + "Max Temp:"
			+ data.list[4].temp.max + " F<br>" + "Weather :"
			+ data.list[4].weather[0].description + "<br>" + "Cloudiness:"
			+ data.list[4].clouds + " %<br>" + "Wind:" + data.list[4].speed
			+ " mps <br>";
}
