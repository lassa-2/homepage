console.log('Have a good day!');

let button = document.querySelector(".js-changeBackgroundButton");
let page = document.querySelector(".js-pageBackgroundChange");
let backgroundColor = document.querySelector(".js-backgroundColor");

button.addEventListener("click", () => {
    page.classList.toggle("page--color");
    backgroundColor.innerText = page.classList.contains("page--color") ? "białe" : "kremowe";
});
