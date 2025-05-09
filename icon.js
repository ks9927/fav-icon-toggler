const heartBtn = document.querySelectorAll("button");

heartBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("filled");
  })
})