import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { getData } from './api'
import Countries from './components/Countries'
import CardData from './components/CardData'
import Graph from './components/Graph'
import Header from './components/Header'
import './app.css'
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

  const [data, setData] = useState({});
  const [totalDeaths, settotalDeaths] = useState('')
  const [country, setCountry] = useState('');

  useEffect(() => {

    const retrieveData = async () => {
      const newData = await getData();
      // console.log("data is ", newData)
      setData(newData);
      settotalDeaths(newData.deaths.value);

    }
    retrieveData();
  }, [])

  const retrieveCountry = async (newCountry) => {
    const fetchedCountries = await getData(newCountry);
    // console.log('fetchedCountries is ', newCountry)

    setData(fetchedCountries);
    setCountry(newCountry);
  }

  const changeCountryString = () => {
    if (country.length === 0)
      return ("GLOBAL STATS");
    else
      return (country.toUpperCase() + " STATS")
  }



  return (
    <div>
      <Header />
      <br/><br/><br/><br/>
      <Countries setCountry={retrieveCountry} />
      <br />
      <CardData data={data} />
      <br />
      <Graph data={data} country={country} totalDeaths={totalDeaths} />
    </div>
  );
}

export default App;
