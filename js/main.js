const weatherKey = "0f599ff9a61ff8b159247255d3361ca1"

async function getData() {
    cityName = document.getElementById('city-name').value;
    countryName = document.getElementById('country-name').value;
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}`);
    data = await response.json();
    
    return data
} 