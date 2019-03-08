const test = QUnit.test;
QUnit.module('hash-query tests');

test('add search to empty query', assert => {
    //arrange
    const expected = ''
    const existingQuery = '';   //establishing an empty query
    const searchTerm = 'chicken';
    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});
