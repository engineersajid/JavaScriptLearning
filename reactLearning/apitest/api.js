const fetchWeather = async () => {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=23.8103&longitude=90.4125&current_weather=true";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // UI-তে ডেটা আপডেট করা
    document.getElementById("temp").innerText =
      `Temperature: ${data.current_weather.temperature}°C`;
    document.getElementById("wind").innerText =
      `Wind Speed: ${data.current_weather.windspeed} km/h`;
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};

fetchWeather();
