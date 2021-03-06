import meal from '../data/meal.js';
import { makeMealCard } from '../src/meal-list-components.js';
const test = QUnit.test;

QUnit.module('meal card template');

test('make meal card', assert => {
    // arrange
    const expected = /*html*/`
        <li>
            <p><a href="https://www.bbcgoodfood.com/recipes/13139/onepan-chicken-couscous">Chicken Couscous</a></p>
            <img src="https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg" alt="image of Chicken Couscous">
            <p>Cuisine: Moroccan</p>
            <p><a href="https://www.youtube.com/watch?v=GZQGy9oscVk" target="_blank">Video</a></p>
            </li>
    `;
    // act
    const result = makeMealCard(meal);
    // assert
    assert.htmlEqual(result, expected);
});