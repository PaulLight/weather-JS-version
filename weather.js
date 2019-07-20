class Weather {
    constructor(city, countryCode){
        this.apiKey = '17e74daf91cd9b6af8e845ee864fc550';
        this.city = city;
        this.countryCode = countryCode;
    }


//Fetch weather from API

async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apiKey}`);

    const responseData = await response.json();

    return responseData
  }

  //Weatherlocation
  changeLocation(city, countryCode){
    this.city = city;
    this.countryCode= countryCode;
  }

}