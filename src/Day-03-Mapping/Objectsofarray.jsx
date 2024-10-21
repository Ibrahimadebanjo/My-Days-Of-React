import PropTypes from 'prop-types';

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};

const Countries = ({ countries }) => {
  const countryList = countries.map((country, index) => (
    <Country key={index} country={country} />
  ));
  return <div>{countryList}</div>;
};

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Countries.defaultProps = {
  countries: [],
};

export default Countries;
