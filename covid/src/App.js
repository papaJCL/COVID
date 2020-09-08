import React, { useState, useEffect } from 'react';
import { Container , Jumbotron } from 'react-bootstrap';
import { getData } from './api'

function App() {

  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  useEffect(() => {

    async function retrieveData() {
      const newData = await getData();
      console.log("data is ", newData)
      setData(newData);
    }
    retrieveData();
  }, [])

  const retrieveCountry = async (newCountry) => {
    const fetchedCountries = await getData(newCountry);

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
    <div>
      <Jumbotron/>
      <Container>
        <h4 >{changeCountryString()}</h4>
  <p ><i>Last update:  </i>{new Date(data.lastUpdate).toDateString()} </p>
        {/* <Countries setCountry={this.setCountry} />
        <Cards data={this.state.data} />
        <Chart data={this.state.data} country={this.state.country} /> */}
      </Container>
    </div>
  );
}

export default App;
