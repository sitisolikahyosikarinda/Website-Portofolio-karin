
console.log('Halo Karin')

// // Function to toggle dark mode
// function toggleDarkMode() {
//     const body = document.body;
//     const navbar = document.querySelector('.navbar');
//     const footer = document.querySelector('footer');
//     const lightModeLinks = document.querySelectorAll('.light-mode a');
  
//     body.classList.toggle('dark'); // Toggle dark class for overall styling
//     navbar.classList.toggle('bg-dark'); // Toggle background color of navbar
//     footer.classList.toggle('bg-dark'); // Toggle background color of footer
  
//     // Optionally toggle link colors based on mode
//     lightModeLinks.forEach(link => {
//       link.classList.toggle('text-white');
//     });
//   }
  
//   // Add dark mode toggle button (Optional)
//   const darkModeToggle = document.createElement('button');
//   darkModeToggle.textContent = 'Toggle Dark Mode';
//   darkModeToggle.classList.add('btn', 'btn-secondary', 'ms-2');
//   darkModeToggle.addEventListener('click', toggleDarkMode);
  
//   // Optionally append the toggle button to a specific element
//   document.querySelector('.navbar-nav').appendChild(darkModeToggle);
  
//   // Check for existing dark mode preference (Optional)
//   const isDarkMode = localStorage.getItem('darkMode') === 'true';
//   if (isDarkMode) {
//     toggleDarkMode(); // Apply dark mode if preferred
//   }

// Lokal Storage 

// function saveContactInfo() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const pesan = document.getElementById('pesan').value;
  
//     // Menyimpan data ke local storage
//     localStorage.setItem('contactInfo', JSON.stringify({ name, email, pesan }));
//   }

  