const nextPage1Button = document.getElementById("nextPage1Button");
const previousPage2Button = document.getElementById("previousPage2Button");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

nextPage1Button.addEventListener("click", () => {
   page1.style.display = "none";
   page2.style.display = "block";
});

previousPage2Button.addEventListener("click", () => {
   page2.style.display = "none";
   page1.style.display = "block";
});