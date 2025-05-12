const navPhone = document.getElementById("nav-phone");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  if (navPhone.style.display === "none" || navPhone.style.display === "") {
    navPhone.style.display = "block";
  } else {
    navPhone.style.display = "none";
  }
});
