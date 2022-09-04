// const tech = [
//         { label: 'HTML' },
//         { label: 'CSS' },
//         { label: 'JavaScript' },
//         { label: 'Node.js' },
//         { label: 'React' },
//         { label: 'Vue' },
//         { label: 'Next.js' },
//         { label: 'Mobx' },
//         { label: 'Redux' },
//         { label: 'React Router' },
//         { label: 'GraphQl' },
//         { label: 'PostgreSQL' },
//         { label: 'MongoDB' },
//       ];
      
      /*
       * 1. Рендерим разметку элементов списка
       * 2. Слушаем изменение фильтра
       * 3. Фильтруем данные и рендерим новые элементы
       */
      
//       const refs = {
//         list: document.querySelector('.js-list'),
//         input: document.querySelector('#filter'),
//       };

// const refs = getRefs();
      
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
      