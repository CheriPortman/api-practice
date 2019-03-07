import meal from '../data/meal.js';

const test = QUnit.test;

QUnit.module('meal card template');


function makeMealCard(meal) {
    const html = /*html*/`
        <li>
            <p>${meal.strMeal}</p>
            <img src=${meal.strMealThumb} alt="image of ${meal.strMeal}">
            <p>Meal Id: ${meal.idMeal}</p>
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
    const result = makeMealCard(meal);
    // assert
    assert.htmlEqual(result, expected);
});