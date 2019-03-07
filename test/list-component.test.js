const test = QUnit.test;

QUnit.module('Card template');

test('do this', assert => {
    // arrange
    const expected = 'something'
        
    // act
    const result = 'something';
    // assert
    assert.htmlEqual(result, expected);
});