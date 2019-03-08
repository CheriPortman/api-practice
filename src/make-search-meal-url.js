const MEAL_SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';

export default function makeSearchMealUrl(queryOptions) {
    const url = new URL(MEAL_SEARCH_URL);
    url.searchParams.set('s', queryOptions.searchTerm);
    return url.toString();
}