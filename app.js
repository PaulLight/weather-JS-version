//Init storage
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Init weather object 
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

//Init UI
const ui = new UI();

//Get weatherr on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    e.preventDefault;
    
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;

    //Change location
    weather.changeLocation(city, countryCode)

    //Set location 
    storage.setLocationData(city, countryCode);

    //Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');

});

function getWeather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

function converKelvinToCelsius(kelvin) {
    if (kelvin < (0)){
        return 'below absolute zero (0 K)';
    }else {
        let myCelsius = 0;
        let myCelsiusRounded = 0;

        myCelsius = kelvin-273.15;
        myCelsiusRounded = Math.round(myCelsius);
        return myCelsiusRounded;
    }
}

function MetrePerSecondToMilesPerHour(mps) {
    let milesPerSecond = 0;
    let milesPerHour = 0;
    let milesPerHourRounded = 0;

    milesPerSecond = mps / 1609.34;
    milesPerHour = milesPerSecond * 3600;
    milesPerHourRounded = Math.round(milesPerHour);
    return milesPerHourRounded;
}

function windDirectionFromDefrees(deg) {
    if (deg <= 44){
        return 'North';
    }else if (deg <= 89){
        return 'Northeasterly';
    }else if (deg <= 134){
        return 'Easterly';
    }else if (deg <= 179){
        return 'Southeasterly';
    }else if (deg <= 224){
        return 'South';
    }else if (deg <= 269){
        return 'Southwesterly';
    }else if (deg <= 314){
        return 'Westerly';
    }else {
        return 'Northwesterly';
    }
}