const toggle = document.getElementById("menuToggle");
const navButtons = document.getElementById("navButtons");

toggle.addEventListener("click", () => {
    navButtons.classList.toggle("active");
});
