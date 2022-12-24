let activeRes = document.querySelector(".active-res");
let cross = document.querySelector(".bi-x-lg");
let resNavbar = document.querySelector(".res-navbar");

activeRes.addEventListener("click", function () {
  if (activeRes.classList.contains("active-res")) {
    cross.classList.add("active-res");
    activeRes.classList.remove("active-res");
    resNavbar.style.display = "block";
  }
});
cross.addEventListener("click", function () {
  if (cross.classList.contains("bi-x-lg")) {
    activeRes.classList.add("active-res");
    cross.classList.remove("active-res");
    resNavbar.style.display = "none";
  }
});


let scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
