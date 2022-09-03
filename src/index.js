console.log('Hello world!');

import './css/styles.css';
// import API from '../js/api-service-hw-10';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryCard } from './js/fetchCountries';
import { onFetchError } from './js/fetchCountries';
import LodashDebounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 500;

const refs = {
  input: document.querySelector('#search-box'),
  countryCardContainer: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', LodashDebounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const target = e.target;
  const country = target.value;
  fetchCountries(country)
    .then(renderCountryCard)
    .catch(onFetchError)
    .finally(() => {
      country.trim();
    });
}
