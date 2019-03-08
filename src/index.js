import meals from '../data/meals.js';
import renderMealCards from './meal-list-components.js';
import './search-component.js';
import { updateMainIngredient } from './search-component.js';
import './paging-component.js';
import { readFromQuery } from './hash-query.js';

renderMealCards(meals);
//add event listener to hashchange in url 
window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    updateMainIngredient(queryOptions.searchTerm);
    
    console.log(queryOptions);
});