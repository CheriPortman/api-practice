import { writePageToQuery, readFromQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 4;
let currentPageNumber = 1;

export function loadPaging(meals) {
    const totalPageCount = Math.ceil(meals / PER_PAGE);
    totalPages.textContent = totalPageCount;
    previousButton.disabled = currentPageNumber === 1;
  
    nextButton.addEventListener('click', () => {
        const existingQuery = window.location.hash.slice(1);
        const queryOptions = readFromQuery(existingQuery);
        currentPageNumber++;
        currentPage.textContent = currentPageNumber;

        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };

        console.log('pagingOptions', pagingOptions);

        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber === 1;
        // queryOptions.page++;
        const newQuery = writePageToQuery(existingQuery, queryOptions.page);
        window.location.hash = newQuery;
    });
    
}

//this just calculates page number and packages the index of what is to be rendered

previousButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery); 
    queryOptions.page--;
    const newQuery = writePageToQuery(existingQuery, queryOptions.page);
    window.location.hash = newQuery;
});
