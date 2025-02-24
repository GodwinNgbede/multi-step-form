const personalEl = document.querySelector(".personal-info");
const firstNextBtn = document.querySelector(".next-one");

function nextStep() {
  personalEl.style.display = "none";
}
firstNextBtn.addEventListener("click", nextStep);
