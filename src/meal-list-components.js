const recipeBox = document.getElementById('recipe-box');

export default function renderMealCards(meals) {
    clearCards()
    meals.forEach(meal => {
        const dom = makeMealCard(meal);
        recipeBox.appendChild(dom);
    });   
}

export function makeMealCard(meal) {
    const html = /*html*/`
        <li>
            <p><a href=${meal.strSource}>${meal.strMeal}</a></p>
            <img src=${meal.strMealThumb} alt="image of ${meal.strMeal}">
            <p>Cuisine: ${meal.strArea}</p>
            <p><a href=${meal.strYoutube} target="_blank" >Video</a></p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

function clearCards() {
    while(recipeBox.children.length > 0) {
        recipeBox.lastElementChild.remove();
    }
}
