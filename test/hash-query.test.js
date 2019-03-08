const test = QUnit.test;
QUnit.module('hash-query tests');


function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery); //currently set to empty string
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}   

test('add search to empty query', assert => {
    //arrange
    const expected = 'searchTerm=chicken&page=1';
    const existingQuery = '';   //establishing an empty query
    const searchTerm = 'chicken';
    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
    console.log(result);
});
