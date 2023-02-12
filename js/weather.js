const apilink = {base: "https://api.openweathermap.org/data/2.5/weather?q=",
                api: "&units=metric&APPID=5c629cb0399a4a91bf5e16bab945a5e8"}
const apilink2 = "https://timezone.abstractapi.com/v1/current_time/?api_key=cb65f39416d84ca6ab64d69724be8605&location=";

const searchbox = document.querySelector('.searchbox');
searchbox.addEventListener('keypress', setQuery);

let myloc = 'Kuala Lumpur';
runfunction();

function runfunction(){
    getResultsWeather(myloc);
    getResults(myloc);
}

function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
        getResultsWeather(searchbox.value);
        myloc = searchbox.value;
    }
}

function getResults(query){
    fetch(`${apilink2}${query}`)
    .then(mytimezone => {
        return mytimezone.json();
    }).then(displayResults);
}

function getResultsWeather (query) {
    fetch(`${apilink.base}${query}${apilink.api}`)
      .then(weather => {
        return weather.json();
      }).then(displayResultsWeather);
  }

function displayResults(mytimezone){
    let datetime = mytimezone.datetime;
    const datetime_array = datetime.split(" ");
    document.getElementById('myclock').innerText = datetime_array[1];
    document.getElementById('datetime').innerText = datetime_array[0];
  }

function displayResultsWeather(weather){
  let img_url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  document.getElementById('weathericon').src = img_url;
    document.getElementById('para2').innerText = `Temperature: ${Math.round(weather.main.temp)}°c`;
    document.getElementById('myloc').innerText = `Location: ${weather.name}, ${weather.sys.country}`;
    document.getElementById('weatherstatus').innerText = `Weather: ${weather.weather[0].description}`;
    document.getElementById('hum').innerText = `Humidity: ${weather.main.humidity}%`;
  }