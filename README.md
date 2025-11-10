# A Thing or Two About Honey

> This is my first simple website, created as part of learning the fundamentals of Front-end Development. It's an informational page about the history and benefits of honey.
>
> **![A cartoon bee logo](images/cartoon_bee.png)**

## Demo

**Check the website:** [https://mg-wiewiora.github.io/homepage/](https://mg-wiewiora.github.io/homepage/)


---

## Functionality

This project is a **single-page informational website** dedicated to the topic of honey. The main goal was to practice semantic HTML structure, CSS styling and my first interaction in JavaScript.

**Key Features:**

* **Informational Content:** Presents detailed text about honey, its history, and types.
* **Structured Layout:** Uses clear **sections** with internal navigation links for better accessibility.
* **Data Presentation:** Includes a responsive **HTML table** displaying price estimates for various honey types.
* **Background Toggle:** Implements basic JavaScript to allow the user to **switch the background color** of the page (from greyish white to pale yellow) for a slightly different reading experience.

---

## Technologies:

This project focuses purely on the fundamentals of the core front-end technologies:

* **HTML5:** Used for a **semantic structure**, utilizing elements like `<header>`, `<main>`, `<section>`, `<nav>`, and `<footer>` to organize content correctly.
* **CSS3:** Used for styling, layout, and achieving a basic responsive design.
    * Styles were organized into multiple separate files (e.g., `header.css`, `button.css`) to practice **modular CSS** structure.
    * The **Normalize.css** library was used for consistent rendering across browsers.
* **JavaScript (Vanilla JS):** A basic script was implemented to handle **DOM manipulation** by toggling a CSS class (`.page--color`) to change the page's appearance.

---

## Learning Points & Focus

While working on this project, I focused on practicing and understanding the following concepts:

1.  **CSS Class Naming:** Applying the **BEM (Block-Element-Modifier)** convention principles (e.g., `section__title`, `table__cell--minor`) for maintainable and scalable CSS.
2.  **Code Consistency:** Using a consistent naming convention for classes that are targeted by JavaScript (`js-pageBackgroundChange`, `js-changeBackgroundButton`).
3.  **Basic Interactivity:** My first steps in **event handling** in JavaScript, specifically attaching a click listener to a button to modify the main page element's style.
4.  **Accessibility and Semantics:** Ensuring correct use of heading levels (`h1` through `h4`) and setting appropriate attributes like `scope` in tables and `alt` tags for images.

---

![gif - how to interact with the page](https://github.com/user-attachments/assets/87b36c6c-8579-44c4-8ae8-bdc25ad21778)

## Author

**Małgorzata Wiewióra** - [my GitHub profile](https://github.com/mg-wiewiora)



