var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];   // Days of the week to forecast
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"]; // Possible weather types

var maxTemp = 100;    // Maximum temperature
var minTemp = 0;      // Minimum temperature

generateWeather();    // Call the function to generate and display the weather

function generateWeather() {
    for (var i = 0; i < days.length; i++) {  // Loop through each day
        var weatherToday = weather[Math.floor(Math.random() * weather.length)]; // Pick a random weather type
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp); // Generate a random temp between min and max

        // Add weather forecast HTML to the page for the current day
        document.getElementById("5DayWeather").innerHTML += 
            "<div id='" + days[i] + "' class='" + weatherToday + "'>" + // Day as ID, weather as class
            "<b>Forecast for " + days[i] + ":</b><br><br>" +            // Bold day label
            weatherToday + " and " + tempToday + " degrees.</div>";     // Show weather and temperature
    }
}
