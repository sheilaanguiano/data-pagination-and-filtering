/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*******  CONSTANTS ************/
import { data } from './data.js'
let itemsPerPage = 9;

/**
  * [Display a list of students cards] 
  * @param {array} list - an array of student objects
  * @param {number} page - the number of Page showing 
  */

function showPage (list, page) {
   let start = (page * itemsPerPage) - itemsPerPage;
   let end = (page * itemsPerPage);
   let studentList = document.getElementsByClassName('student-list')[0];

   studentList.innerHTML = '';

   for(let i = 0; i < list.length; i++){
      if( i >= start && i < end){
         
         let li = document.createElement('li');
         li.setAttribute("class", "student-item cf");
           
         li.innerHTML = `
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
            `;
            studentList.insertAdjacentElement("beforeend", li);        
      }
   }
 
}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   let pages = Math.ceil(list.length / itemsPerPage);
   let linkList = document.getElementsByClassName('link-list')[0];

   linkList.innerHTML = '';

   for(let i= 1; i <= pages; i++) {
      let li = document.createElement('li');
      li.innerHTML = `
         <button type="button">${i}</button>
         `
      linkList.insertAdjacentElement("beforeend", li);
   }
   linkList.querySelector('li:first-child button').setAttribute('class', 'active');

   linkList.addEventListener('click', (e)=> {
      linkList.querySelector('[class="active"]').removeAttribute("class");
      e.target.setAttribute('class', 'active');
      let page = e.target.textContent;
      console.log(page);

      showPage(data, page);
   })
}


// Call functions
showPage(data, 1);
addPagination(data);
searchBar();

function searchBar(){
   const header = document.querySelector(".header");
   let bar = document.createElement('form');

   bar.innerHTML = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
       </label>
   `;
   header.appendChild(bar);

   
}