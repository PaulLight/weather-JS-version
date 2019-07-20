//Init weather object 

const weather = new Weather('Boston', 'MA');

//Init UI
const ui = new UI();

//Get weatherr on DOM load
document.addEventListener('DOMContentLoaded', getweather);

function getWeather(){
weather.getWeather()
    .then(results => {
       Uint16Array.paint(results);
    })
    .catch(err => console.log(err));
}