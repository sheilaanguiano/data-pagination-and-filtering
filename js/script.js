/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*******  VARIABLES ************/
import { data } from './data.js'
let itemsPerPage = 9;

/**
  * [Display a list of students cards] 
  * @param {array} list - an array of student objects
  * @param {number} currentPage - the number of Page showing 
  */

function showPage (list, currentPage) { 
   let studentList = document.getElementsByClassName('student-list')[0];
   if (list.length === 0) {
      studentList.innerHTML= `
         <h2>No results found...</h>
      `
      addPagination([], 0)
   } else {
      let start = (currentPage * itemsPerPage) - itemsPerPage;
      let end = (currentPage * itemsPerPage);

      console.log(`Page ${currentPage}`);

      studentList.innerHTML = '';

      for (let i = 0; i < list.length; i++) {
         if (i >= start && i < end) {
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
      addPagination(list, currentPage);
   }
}



/**
  * [Inserts pagination buttons based on the list
  * length and desired items to show per page] 
  * @param {array} list - an array of student objects
  */

function addPagination(list, currentPage) {
   let pages = Math.ceil(list.length / itemsPerPage);
   let linkList = document.getElementsByClassName('link-list')[0];

   linkList.innerHTML = '';

   for(let i= 1; i <= pages; i++) {
      let li = document.createElement('li');

      if (currentPage == i ) {
         li.innerHTML = `
               <button type="button" class="active">${i}</button>
             `
      }
      else {
         li.innerHTML = `
                <button type="button">${i}</button>
              `
      }

      linkList.insertAdjacentElement("beforeend", li);

   }

   linkList.addEventListener('click', (e)=> {
      linkList.querySelector('[class="active"]').removeAttribute("class");
      
      e.target.setAttribute('class', 'active');
      let page = e.target.textContent;
      console.log(page);

      showPage(list, page);
   })
}


function searchBar(list) {
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

   bar.addEventListener('submit', (e)=> {
      let searchInput = document.getElementById('search').value.toLowerCase();
      e.preventDefault();
      console.log(searchInput);
      
      function searchByName(student){
         return student.name.first.toLowerCase().includes(searchInput) 
               || student.name.last.toLowerCase().includes(searchInput);
      }

      const newList = list.filter(searchByName);
      console.log(newList);
      
      showPage(newList, 1);
   })
   
}



// Call functions
showPage(data, 1);
searchBar(data);