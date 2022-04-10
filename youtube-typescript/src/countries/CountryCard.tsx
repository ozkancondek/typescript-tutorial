import { FunctionComponent } from "react";
import { CountryType } from "./types";

interface ICountryProps {
  country: CountryType;
}

const CountryCard: FunctionComponent<ICountryProps> = (props) => {
  //this is also an option but it could be a problem for child and key elements
  //export const CountryCard = (props : ICountryProps) => {

  const { country } = props;
  return (
    <div>
      <img src={country.flags.png} alt="flag" />

      <h3> Name : {country.name.common}</h3>
      <h3> Capital : {country.capital}</h3>
    </div>
  );
};

export default CountryCard;
