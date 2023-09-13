import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} className="CountriesList" />
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} className="CountryDetails" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
