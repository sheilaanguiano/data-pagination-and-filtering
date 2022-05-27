/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

import { data } from './data.js'

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// Function should have 2 params
// @list param to represent student data that will be passed as an argument
//@page pram represent the page num that will be
//passed as an argument when the function is called
const ul = document.getElementsByTagName('link-list');
let itemsPerPage = 9;


function showPage (list, page) {
   let start = (page * itemsPerPage) - itemsPerPage;
   let end = (page * itemsPerPage);

   console.log(`Currently Displaying Page: ${page} from Index:${start} to Index: ${end}`);

   let displayList = list.slice(start, end);
   console.log(displayList);

   displayList.forEach( student => {
      let li = document.createElement('li');
      li.setAttribute("class", "student-item cf");
      li.innerHTML =`
         <div class="student-details">
         <img class="avatar" src="${student.picture.thumbnail}" alt="Profile Picture">
         <h3>${student.name.first} ${student.name.last}</h3>
         <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
         <span class="date">Joined ${student.registered.date}</span>
         </div>
         `;
      console.log(li);
     
      } 
   );
 
  
}

showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


