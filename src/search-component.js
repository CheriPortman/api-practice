const searchForm = document.getElementById('search-form');

export default function loadSearch() {
    searchForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(searchForm);
        const mainIngredient = formData.get('main-ingredient');
        console.log('clicked', mainIngredient);
    });
}