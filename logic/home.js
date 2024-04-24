// Template Navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(html => {
      document.getElementById('navbar-container').innerHTML = html;
  });

// Template Footer
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
      document.getElementById('footer-container').innerHTML = html;
  });

// Give Color in Navbar
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scrolled');
    navbar.classList.remove('navbar-blur'); // Hapus class blur jika di-scroll
  } else {
    navbar.classList.remove('navbar-scrolled');
    navbar.classList.add('navbar-blur'); // Tambahkan class blur jika tidak di-scroll
  }
});


// Give Moving Line in Article
window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const documentHeight = document.body.clientHeight;
  const windowHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  
  const movingLine = document.querySelector('.moving-line');
  const newPosition = scrollPercent - 100; // Adjust the percentage according to your preference
  movingLine.style.transform = `translateX(${newPosition}%)`;
});

// Smooth Path to Target
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          const topOffset = targetElement.offsetTop;
          window.scrollTo({
              top: topOffset,
              behavior: 'smooth'
          });
      }
  });
});

// Hide Navhar
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Show Hamburger Menu
function myFunction() {
  var x = document.getElementById("myLinks");
  x.classList.toggle("show");
}

// Mendapatkan elemen-elemen yang diperlukan
var nameInput = document.getElementById('name');
var placeInput = document.getElementById('place');
var submitButton = document.getElementById('submitButton');
var errorDiv = document.getElementById('errorDiv');

// Menambahkan event listener untuk tombol submit
submitButton.addEventListener('click', function() {
    // Memeriksa apakah kedua input telah diisi
    if (nameInput.value.trim() === '' || placeInput.value.trim() === '') {
        // Jika tidak, tampilkan pesan kesalahan di div baru di bawah form
        errorDiv.textContent = 'Mohon isi Nama dan Asal sebelum melanjutkan!';
    } else {
        // Jika ya, bersihkan pesan kesalahan dan arahkan ke halaman lain
        errorDiv.textContent = '';
        window.location.href = 'pantau.html';
    }
});


