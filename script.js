
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Coder"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

/*show slidebar*/
function showSlidebar() {
  const sidebar = document.querySelector(".slidebar");
  sidebar.style.display = "flex";
}

/*hide slidebar*/
function hideSidebar(){
  const sidebar = document.querySelector(".slidebar");
  sidebar.style.display = "none";
}


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      // Toggle active class on the clicked row
      row.classList.toggle('active');
    });
  });
});


// Show button when user scrolls down
window.onscroll = function () {
  let btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}