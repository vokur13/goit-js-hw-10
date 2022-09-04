const BASE_URL = 'https://restcountries.com/v3.1';

const searchParams = new URLSearchParams({
        fields:['name','capital','population','flags','languages']
      });

      export const fetchCountries = (name) => {
        return fetch(`${BASE_URL}/name/${name}?${searchParams}`).then((response) => {
          return response.json();
        });
      };

//       

      
//       refs.input.addEventListener('input', _.debounce(onFilterLook, 250));
      
//       const listItemsMarkup = itemsMap(tech);
//       populateList(listItemsMarkup);
      
//       function itemsMap(items) {
//         return items.map(item => `<li>${item.label}</li>`).join('');
//       }
      
//       function onFilterLook(e) {
//         console.log('INPUT');
//         const filter = e.target.value.toLowerCase();
      
//         const filteredItems = tech.filter(item => item.label.toLowerCase().includes(filter));
      
//         const listItemsMarkup = itemsMap(filteredItems);
//         populateList(listItemsMarkup);
//       }
      
//       function populateList(markup) {
//         refs.list.innerHTML = markup;
//       }
      