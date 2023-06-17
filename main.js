const dropdown = document.querySelectorAll(".dropdown");

dropdown.forEach((div) => {
  div.addEventListener("click", function () {
    div.classList.toggle("ccopen");
  });
});