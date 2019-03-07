import meals from '../data/meals.js';

const test = QUnit.test;

QUnit.module('recipe card template');


function makeMealCard(meals) {
    const html = /*html*/`
        <li>
            <p>${meals[0].strMeal}</p>
            <img src=${meals[0].strMealThumb} alt="image of ${meals[0].strMeal}">
            <p>Meal Id: ${meals[0].idMeal}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make meal card', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <p>Chicken Couscous</p>
            <img src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" alt="image of Chicken Couscous">
            <p>Meal Id: 52850</p>
        </li>
    `;
    // act
    const result = makeMealCard(meals);
    // assert
    assert.htmlEqual(result, expected);
});