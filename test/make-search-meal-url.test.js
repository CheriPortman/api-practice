const test = QUnit.test;
QUnit.module('make URL for fetch');

const MEAL_SEARCH_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';

function makeSearchMealUrl(queryOptions) {
    const url = new URL(MEAL_SEARCH_URL);
    url.searchParams.set('s', queryOptions.searchTerm);
    return url.toString();
}

test('include query and page', assert => {
    //arrange
    const expected = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
    const queryOptions = {
        searchTerm: 'chicken',
        page: 1
    };
    
    //act
    const result = makeSearchMealUrl(queryOptions);
    //assert
    assert.equal(result, expected);
});