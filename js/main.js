const weatherKey = "0f599ff9a61ff8b159247255d3361ca1"

roundNum = (num) => {
    let rounded = Math.round(num*10)/10;
    return rounded
}

//Function to get city name from form, pass it to the API call, and fill global variable with data
async function getData(){
    cityName = document.getElementById('city-name').value;
    countryName = document.getElementById('country-name').value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${weatherKey}&units=imperial`);
    data = await response.json();
    document.getElementById("city").innerHTML=data.name;
    document.getElementById("country").innerHTML= data.sys.country
    document.getElementById("high").innerHTML = `${roundNum(data.main.temp_max)} F`;
    document.getElementById("low").innerHTML =`${roundNum(data.main.temp_min)} F`;
    document.getElementById("feel").innerHTML =`${roundNum(data.main.feels_like)} F`;
    document.getElementById("description").innerHTML=data.weather[0].description;
    document.getElementById("cloud").innerHTML = `${data.clouds.all} %`;
    return data

}