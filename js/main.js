const weatherKey = "0f599ff9a61ff8b159247255d3361ca1"

//Function to get city name from form, pass it to the API call, and fill global variable with data
async function getData(){
    cityName = document.getElementById('city-name').value;
    countryName = document.getElementById('country-name').value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${weatherKey}&units=imperial`);
    data = await response.json();
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("country").innerHTML= data.sys.country
    document.getElementById("high").innerHTML = `${data.main.temp_max} F`;
    document.getElementById("low").innerHTML =`${data.main.temp_min} F`;
    document.getElementById("feel").innerHTML =`${data.main.temp} F`;
    document.getElementById("description").innerHTML=data.weather[0].description;
    document.getElementById("cloud").innerHTML = `${data.clouds.all} %`;
    return data

}