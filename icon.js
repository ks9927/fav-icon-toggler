const heartBtn = document.querySelectorAll("button");

function toggleBtn(btn) {
  btn.classList.toggle("filled");
  if(btn.classList.contains("filled")) {
    btn.innerHTML = "&#10084;";
  }
  else {
  btn.innerHTML = "&#9825;";
  }
}
heartBtn.forEach(btn => {
  btn.addEventListener("click", () => {
   toggleBtn(btn);
  })
})