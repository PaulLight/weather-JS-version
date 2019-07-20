class Storage {
    constructor(){
        this.city;
        this.countryCode;
        this.defualtCity = 'London';
        this.defaultCountryCode = 'GB';
    }

    getLocationData(){
        if (localStorage.getItem('city') === null){
            this.city = this.defualtCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('countryCode') === null){
            this.city = this.defaultCountryCode;
        }else{
            this.city = localStorage.getItem('countryCode');
        }

        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }

}