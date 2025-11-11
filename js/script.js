{
    const toggleBackground = () => {
        const page = document.querySelector(".js-pageBackgroundChange");
        const backgroundColor = document.querySelector(".js-backgroundColor");
        page.classList.toggle("page--color");
        backgroundColor.innerText = page.classList.contains("page--color") ? "białe" : "kremowe";
    };

    const init = () => {
        const button = document.querySelector(".js-changeBackgroundButton");
        button.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
};