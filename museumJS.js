document.addEventListener('DOMContentLoaded', () => {
    console.log('Manitoba Agricultural Museum Website Loaded');
  
    const searchForm = document.querySelector('.search-bar form');
    const sections = document.querySelectorAll('main section');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload
      const query = this.search.value.trim().toLowerCase();
  
      if (!query) {
        // If search is empty, show all sections
        sections.forEach(section => section.style.display = 'block');
        return;
      }
  
      sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown");

    dropdownToggle.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent bubbling
      dropdown.classList.toggle("active");
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });

  // Toggle the main dropdown menu open/close
const dropdown = document.getElementById('myDropdown');
const toggleBtn = dropdown.querySelector('.dropdown-toggle');

toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

// Toggle submenus open/close on click of their parent li
const submenuParents = dropdown.querySelectorAll('.dropdown-menu > li');

submenuParents.forEach(parentLi => {
  parentLi.addEventListener('click', (e) => {
    // Only toggle submenu if clicking on the LI itself or its direct text node, not a link inside
    if (e.target === parentLi || e.target === parentLi.firstChild) {
      parentLi.classList.toggle('open');
    }
  });
});

// Close menus if clicking outside
document.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('show');
    submenuParents.forEach(li => li.classList.remove('open'));
  }
});

