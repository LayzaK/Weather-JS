async function getWeather() { // it waits for internet responses before continuing.
  const city = document.getElementById("city").value; // Gets the value entered by the user in <input id="city">. .trim() removes extra spaces (e.g., " São Paulo " becomes "São Paulo").
  const apiKey = "b9375a43c5b743615f7dff2cd5b4b5f4"; // OpenWeatherMap API key.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`; // Builds the URL to be sent to the OpenWeather server.

  console.log("URL being called:", url);

  try {
    const response = await fetch(url); // fetch(url) makes the HTTP request
    if (!response.ok) throw new Error("City not found"); 

    const data = await response.json(); // Converts the API response from raw text to a usable JSON object.
    const temp = data.main.temp; // desired values from the JSON response.
    const description = data.weather[0].description; // weather description.

    document.getElementById("weather-result").innerText =
      `Temperatura: ${temp}°C\nClima: ${description}`; // displays the results in the element with id "weather-result".
  } catch (error) {
    document.getElementById("weather-result").innerText = error.message; // catches any error (like city not found) and displays an error message.
  }
}
