import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const MealNameNode = document.getElementById('meal-name');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const MealName = MealNameNode.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, MealName);
    window.location.hash = newQuery;
});

export function updateMealName(searchTerm) {
    MealNameNode.value = searchTerm;
}