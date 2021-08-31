/** @format */

const mobile = document.querySelector(".mobile");
const navigation = document.querySelector(".navigation");

mobile.addEventListener("click", () => {
   mobile.classList.toggle("is-active");
   navigation.classList.toggle("active");
});
