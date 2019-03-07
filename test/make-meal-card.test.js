import meal from '../data/meal.js';
import { makeMealCard } from '../src/meal-list-components.js';
const test = QUnit.test;

QUnit.module('meal card template');

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