import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;
QUnit.module('hash-query tests');

test('set search to query', assert => {
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

test('adds search to existing query', assert => {
    //arrange
    const expected = 'searchTerm=beef&page=1';
    const existingQuery = 'searchTerm=chicken&page=1';
    const searchTerm = 'beef';
    //act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(result, expected);
});

test('add page to query', assert => {
    //arrange
    const expected = 'searchTerm=beef&page=2';
    const existingQuery = 'searchTerm=beef&page=1';
    const page = 2;
    //act
    const result = writePageToQuery(existingQuery, page);
    //assert
    assert.equal(result, expected);
});

test('read options from query', assert => {
    //arrange
    const query = 'searchTerm=beef&page=2';
    const expected = {
        searchTerm: 'beef',
        page: 2
    };
    //act
    const result = readFromQuery(query);
    //assert
    assert.deepEqual(result, expected);
});