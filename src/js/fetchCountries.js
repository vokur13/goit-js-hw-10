import countryCardTpl from '../templates/country-card.hbs';
import getRefs from '../js/get-refs';

const BASE_URL = 'https://restcountries.com/v3.1';
const refs = getRefs();

// const container = document.querySelector('.country-info');

export const fetchCountries = (name) => {
  return fetch(`${BASE_URL}/name/${name}`).then((response) => {
    return response.json();
  });
};

export const renderCountryCard = (country) => {
  const markupCountryInfo = country.map((item) => {
    return countryCardTpl(item);
  });
  refs.container.innerHTML = markupCountryInfo;
};

export const onFetchError = (error) => {
  console.log('Oops, there is no country with that name');
};
