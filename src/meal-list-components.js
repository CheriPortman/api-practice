const recipeBox = document.getElementById('recipe-box');

export default function renderMealCards(meals) {
    meals.forEach(meal => {
        const dom = makeMealCard(meal);
        recipeBox.appendChild(dom);
    });   
}

export function makeMealCard(meal) {
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
