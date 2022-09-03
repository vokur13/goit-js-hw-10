import countryCardTpl from '../templates/country-card.hbs';

// const BASE_URL = 'https://restcountries.com/v3.1';

const container = document.querySelector('.country-info');

export const fetchCountries = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  return fetch(url).then((response) => {
    return response.json();
  });
};

// export const fetchCountries = (name) => {
//   return fetch(`${BASE_URL}/name/${name}`).then((response) => {
//     return response.json();
//   });
// };

export const renderCountryCard = (country) => {
  const markupCountryInfo = country.map((item) => {
    return countryCardTpl(item);
  });
  container.innerHTML = markupCountryInfo;
};

export const onFetchError = (error) => {
  console.log('Oops, there is no country with that name');
};
