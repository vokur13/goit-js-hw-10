import './css/styles.css';
import countryFilterTpl from './templates/country-filter.hbs';
import countryCardTpl from './templates/country-card.hbs';
import { fetchCountries } from './js/fetchCountries';
import LodashDebounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import getRefs from './js/get-refs';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

refs.input.addEventListener('input', LodashDebounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const target = e.target;
  const trimValue = target.value;
  const country = trimValue.trim();
  if (country) {
    fetchCountries(country)
      .then(renderCountryCard)
      .catch(onFetchError)
      .finally(() => {});
  }
  refs.list.innerHTML = '';
  refs.container.innerHTML = '';
  return;
}

// Реализация разметки через Handelbars

// function renderCountryCard(country) {
//   const markupCountryInfo = countryFilterTpl(country);
//   refs.list.innerHTML = markupCountryInfo;
// }

function renderCountryCard(country) {
  const markupCountryInfo = country.map(item => {
    return countryCardTpl(item);
  });
  refs.container.innerHTML = markupCountryInfo;
}

// Реализация разметки карточки страны через шаблонную строку

// function renderCountryCard(country) {
//   if (country.length > 10) {
//     Notiflix.Notify.warning(
//       'Too many matches found. Please enter a more specific name.'
//     );
//     console.log('Too many matches found. Please enter a more specific name.');
//     return;
//   }
//   if (country.length >= 2 && country.length <= 10) {
//     const markupCountryInfo = countryFilterTpl(country);
//     refs.list.innerHTML = markupCountryInfo;
//     return;
//   }
//   if (country.length < 2) {
//     refs.list.innerHTML = '';
//     const markupCountryInfo = country
//       .map(
//         item => `<div class='card'>
//   <div class='card-header'>
//     <div class='card-img-top'>
//       <img src=${item.flags.svg} alt=${item.name.common} width='40' />
//     </div>
//     <h2 class='card-title'>${item.name.official}</h2>
//   </div>
//   <div class='card-body'>
//     <p class='card-text'>Capital: <span class='card-span'>${
//       item.capital
//     }</span></p>
//     <p class='card-text'>Population:
//       <span class='card-span'>${item.population}</span></p>
//     <p class='card-text'>Languages:
//       <span class='card-span'>${Object.values(item.languages).join(
//         ', '
//       )}</span></p>
//   </div>
// </div>`
//       )
//       .join('');
//     return (refs.container.innerHTML = markupCountryInfo);
//   } else {
//     return error;
//   }
// }

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
  console.log('Oops, there is no country with that name');
}
