import { writePageToQuery, readFromQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');
const nextButton = document.getElementById('next-button');

const PER_PAGE = 4;
let currentPageNumber = 1;

// let dbMeals = [];


export function loadPaging(meals) {
    console.log('meals', meals);
    const totalPageCount = Math.ceil(meals.length / PER_PAGE);
    // console.log('totalPageCount', totalPageCount);

    currentPage.textContent = currentPageNumber;
    totalPages.textContent = totalPageCount;
    previousButton.disabled = true;
    // previousButton.disabled = currentPageNumber === 1;
    
    nextButton.addEventListener('click', () => {
        // const existingQuery = window.location.hash.slice(1);
        // const queryOptions = readFromQuery(existingQuery);
        currentPageNumber++;
        currentPage.textContent = currentPageNumber;
        
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        
        console.log('pagingOptions', pagingOptions);
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber <= 1;
        
        // queryOptions.page++;
        // const newQuery = writePageToQuery(existingQuery, queryOptions.page);
        // window.location.hash = newQuery;
    });
    
    previousButton.addEventListener('click', () => {
        // const existingQuery = window.location.hash.slice(1);
        // const queryOptions = readFromQuery(existingQuery); 
        currentPageNumber--;
        currentPage.textContent = currentPageNumber;
        
        const pagingOptions = {
            page: currentPageNumber,
            perPage: PER_PAGE
        };
        
        nextButton.disabled = currentPageNumber === totalPageCount;
        previousButton.disabled = currentPageNumber <= 1;
        // const newQuery = writePageToQuery(existingQuery, queryOptions.page);
        // window.location.hash = newQuery;
        console.log('pagingOptions', pagingOptions);
    });
    
}

//this just calculates page number and packages the index of what is to be rendered

