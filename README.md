# Treehouse Techdegree: FSJS Project 2 - Data Pagination and Filtering

For this project I created 3 functions:

1) showPage that creates a series of student cards from an external array of objects and calculates the amount of cards per Pages and calls the addPagination function to render the pagination buttons.


2)addPagination calculates the number of pages based on the desired cards(students) to display per Page. It calls showPage again to display a different subset of the initial array based on the page button selected

3) showSearchBar function creates a form that coverts to lower case the input text and runs it again the first name and last name strings (also converted to lower case) to return a new list that feeds into showPage.