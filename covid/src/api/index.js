import axios from 'axios';
import "regenerator-runtime/runtime.js";


const url = "https://covid19.mathdro.id/api"

export const getData = async (country) => {

    let changeURL = url;

    if (country && country!="global" ){
        changeURL = `${url}/countries/${country}`
    }


    try {
        const { data } = await axios.get(changeURL);

        const changedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

        return changedData;
    } catch (e) {
        return e;
    }
}

export const fetchDaily = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) =>
            ({
                confirmed: confirmed.total,
                deaths: deaths.total,
                date
            }));

    } catch (e) {
        return e;
    }
}

export const fetchCountries = async () => {
    try {
        const {data:{countries}} = await axios.get(`${url}/countries`)
       return countries.map((country) => country.name )
    } catch (e) {
        console.log(e)
        return e;
    }
}