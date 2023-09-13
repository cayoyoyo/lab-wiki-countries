import React from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((c) => c.alpha3Code === id);

  if (!country) {
    return <div>Country not found</div>;
  }

  const neighboringCountries = countries.filter((c) =>
    country.borders.includes(c.alpha3Code)
  );

  return (
    <div className="countryDetails">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        alt={`${country.name.common} Flag`}
        className="img-fluid flag"
      />
      <h2>{country.name.common}</h2>
      <p className="font-weight-bold">Capital: {country.capital.join(", ")}</p>
      <p className="font-weight-bold">Region: {country.region}</p>
      <p className="font-weight-bold">Area: {country.area} km²</p>

      {country.borders.length > 0 ? (
        <div>
          <h3 className="font-weight-bold">Neighboring Countries:</h3>
          <ul>
            {neighboringCountries.map((neighbor) => (
              <li className="listaPaises" key={neighbor.alpha3Code}>
                <Link to={`/${neighbor.alpha3Code}`}>{neighbor.name.common}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No neighboring countries found.</p>
      )}
    </div>
  );
}

export default CountryDetails;
