// import meals from '../data/meals.js';
import renderMealCards from './meal-list-components.js';
import './search-component.js';
import { updateMealName } from './search-component.js';
import { loadPaging } from './paging-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchMealUrl from './make-search-meal-url.js';

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMealName(queryOptions.searchTerm);
    
    const url = makeSearchMealUrl(queryOptions);
    fetch(url)
        .then(response => response.json())
        .then(result => result.meals)
        .then(meals => {
            renderMealCards(meals);
            loadPaging(meals);
        });
    console.log('index.js, queryOptions:', queryOptions);
});
