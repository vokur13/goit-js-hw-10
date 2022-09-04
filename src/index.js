console.log('Hello world!');

import './css/styles.css';
import countryFilterTpl from './templates/country-filter.hbs';
import countryCardTpl from './templates/country-card.hbs';
import { fetchCountries } from './js/fetchCountries';
import LodashDebounce from 'lodash.debounce';
import getRefs from './js/get-refs';

const DEBOUNCE_DELAY = 500;

const refs = getRefs();

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

//  function renderCountryCard (country) {
//         const markupCountryInfo = country.map((item) => {
//           return countryCardTpl(item);
//         });
//         refs.container.innerHTML = markupCountryInfo;
//       };

//        function onFetchError (error) {
//         console.log('Oops, there is no country with that name');
//       };

function renderCountryCard (country) {
        const markupCountryFilter = country.map((item) => 
        `<li><div class='card-img-top'>
        <img src=${item.flags.svg} alt=${item.name.common} width='30' />
      </div>${item.name.common}</li>`
        ).join(''); 
        return refs.list.innerHTML = markupCountryFilter
      };

       function onFetchError (error) {
        console.log('Oops, there is no country with that name');
      };
