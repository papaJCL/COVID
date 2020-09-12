import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { getData } from './api'
import Countries from './components/Countries'
import CardData from './components/CardData'
import Graph from './components/Graph'
import './app.css'
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {

    const retrieveData = async () => {
      const newData = await getData();
      // console.log("data is ", newData)
      setData(newData);
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
      <Container>
         <Typography align="center" variant="h3" color="#e0e0e0" gutterBottom>
            {changeCountryString()}
        </Typography>
        <p ><i>Last update:  </i>{new Date(data.lastUpdate).toDateString()} </p>
        <CardData data={data} />
        <br/>
        <Countries setCountry={retrieveCountry} />
        </Container>
        <br/>
       <Graph data={data} country={country} />
    </div>
  );
}

export default App;