import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { getData } from './api'
import Countries from './components/Countries'
import CardData from './components/CardData'
import Graph from './components/Graph'
import './app.css'

function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {

    const retrieveData = async () => {
      const newData = await getData();
      console.log("data is ", newData)
      setData(newData);
    }
    retrieveData();
  }, [])

  const retrieveCountry = async (newCountry) => {
    const fetchedCountries = await getData(newCountry);
    console.log('fetchedCountries is ', newCountry)

    setData(fetchedCountries);
    setCountry(newCountry);
  }

  const changeCountryString = () => {
    if (country.length == 0)
      return ("GLOBAL STATS");
    else
      return (country.toUpperCase() + " STATS")
  }



  return (
      <Container>  
        <h4 >{changeCountryString()}</h4>
        <p ><i>Last update:  </i>{new Date(data.lastUpdate).toDateString()} </p>
        <Countries setCountry={retrieveCountry} />
        <CardData data={data} />
        <Graph data={data} country={country} />
      </Container>
  );
}

export default App;
