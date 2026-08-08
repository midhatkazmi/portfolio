header = document.getElementById("Header");

if (window.scrollY <= 0) {
  header.classList.add("expanded");
} else {
  header.classList.remove("expanded");
}

window.addEventListener("scroll", function () {
  if (window.scrollY <= 0) {
    header.classList.add("expanded");
  } else {
    header.classList.remove("expanded");
  }
});

body = document.getElementById("Body");
themeBtn = document.getElementById("Theme-Button");

themeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");
});

nav = document.getElementById("Navigation");
navBtn = document.getElementById("Navigation-Button");

navBtn.addEventListener("click", function () {
  nav.classList.toggle("collapsed");
});

year = document.getElementById("Year");
currYear = new Date().getFullYear();

year.textContent = currYear;
year.setAttribute("datetime", currYear);

copyBtn = document.getElementById("Copy-Button");

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText("midhatkazmi.com@gmail.com");
});
