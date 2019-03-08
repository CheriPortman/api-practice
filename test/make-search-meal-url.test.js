import makeSearchMealUrl from '../src/make-search-meal-url.js';

const test = QUnit.test;
QUnit.module('make URL for fetch');

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