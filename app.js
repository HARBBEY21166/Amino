document.addEventListener('DOMContentLoaded', function() {
  // Signup / Login functionality
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // ... signup code ...
        document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Basic validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulate a signup process (replace with actual API call)
    console.log("User  signed up:", { username, email, password });
    alert("Signup successful! You can now log in.");
    
    // Optionally redirect to login page
    window.location.href = 'login.html';
});

    });
  }
  
  // Arrow navigation for movie lists
  const arrows = document.querySelectorAll(".arrow");
  const movieLists = document.querySelectorAll(".movie-list");
  arrows.forEach((arrow, i) => {
    // ... arrow navigation code ...
      //arrow
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
  });
  
  // Dark/Light mode toggle functionality
  const ball = document.querySelector(".toggle-ball");
  const themeItems = document.querySelectorAll(".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle");
  ball.addEventListener("click", () => {
    themeItems.forEach(item => item.classList.toggle("active"));
    ball.classList.toggle("active");
  });
  
  // Search functionality
  // ... include your search code here ...

    // Search functionality (moved here from the nested listener)
  const searchIcon = document.getElementById('search-icon');
  const searchContainer = document.getElementById('search-container');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  // Sample data for search results
  const movieData = [
      { title: 'Dune', year: '2021', type: 'Sci-Fi', image: 'img/10.jpg' },
      { title: 'No Time To Die', year: '2021', type: 'Action', image: 'img/11.jpg' },
      { title: 'The Matrix Resurrections', year: '2021', type: 'Sci-Fi', image: 'img/12.jpg' },
      { title: 'Her', year: '2013', type: 'Drama', image: 'img/1.jpeg' },
      { title: 'Star Wars', year: '1977', type: 'Sci-Fi', image: 'img/2.jpeg' }
  ];
  
  // Open search modal
  searchIcon.addEventListener('click', function() {
      searchContainer.classList.add('active');
      searchInput.focus();
  });
  
  // Close search modal
  closeSearch.addEventListener('click', function() {
      searchContainer.classList.remove('active');
      searchInput.value = '';
      searchResults.innerHTML = '';
  });
  
  // Perform search on input
  searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      if (query === '') {
          searchResults.innerHTML = '';
          return;
      }
      const filteredResults = movieData.filter(movie => 
          movie.title.toLowerCase().includes(query) || 
          movie.type.toLowerCase().includes(query)
      );
      displayResults(filteredResults);
  });
  
  // Display search results
  function displayResults(results) {
      searchResults.innerHTML = '';
      if (results.length === 0) {
          searchResults.innerHTML = '<p>No results found</p>';
          return;
      }
      results.forEach(movie => {
          const resultItem = document.createElement('div');
          resultItem.className = 'search-result-item';
          resultItem.innerHTML = `
              <img src="${movie.image}" alt="${movie.title}" class="search-result-img">
              <div class="search-result-info">
                  <h3>${movie.title}</h3>
                  <p>${movie.year} | ${movie.type}</p>
                  <button class="search-result-btn">Watch</button>
              </div>
          `;
          searchResults.appendChild(resultItem);
      });
  }
  
  // Close search when clicking outside the modal
  window.addEventListener('click', function(e) {
      if (e.target === searchContainer) {
          searchContainer.classList.remove('active');
          searchInput.value = '';
          searchResults.innerHTML = '';
      }
  });
  
  // Prevent closing when clicking inside the search container
  searchContainer.addEventListener('click', function(e) {
      e.stopPropagation();
  });
  
  // Profile dropdown functionality
  const profileToggle = document.getElementById('profile-dropdown-toggle');
  const profileMenu = document.getElementById('profile-dropdown-menu');
  if (profileToggle && profileMenu) {
    profileToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      profileMenu.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
      if (!profileMenu.contains(e.target) && !profileToggle.contains(e.target)) {
        profileMenu.classList.remove('active');
      }
    });
  }
  
  // Any other initializations…
    let currentSlide = 0;
      const slides = document.querySelector('.slides');
      const dots = document.querySelectorAll('.slider-dot');
      const totalSlides = dots.length;
      
      // Function to change slide
      function goToSlide(n) {
        slides.style.transform = `translateX(-${n * 25}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[n].classList.add('active');
        
        currentSlide = n;
      }
      
      // Add click events to dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
      });
      
      // Auto slide
      setInterval(() => {
        let next = (currentSlide + 1) % totalSlides;
        goToSlide(next);
      }, 5000);
    
    // Any other initializations…
    ;
});
 

