import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import CountryCard from "./countries/CountryCard";
import { Loading } from "./countries/Loading";

import { CountryType } from "./countries/types";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  //console.log(countries);
  return (
    <div className="App">
      <Loading loading={loading}>
        {countries.map((country, index) => {
          return (
            <div>
              <CountryCard key={index} country={country} />
            </div>
          );
        })}
      </Loading>
    </div>
  );
}

export default App;
