// For Hello Statement animation
const nameContainer = document.getElementById("name-title-container");
console.log(nameContainer);
const nameEl = document.createElement("h1");
nameEl.id = "name";

const pace = 100;

const nameAnimation = (text) => {
  [...text].forEach((letter, i) => {
    setTimeout(() => {
      console.log(letter);
      nameEl.innerHTML += letter;
    }, i * pace);
  });
  nameContainer.appendChild(nameEl);
};

// Set scroll function for nar bar selections
const aboutContainer = document.querySelector(".about-container");
const workHistoryContainer = document.querySelector(".work-history-container");
const projectsContainer = document.querySelector(".projects-container");
const contactContainer = document.querySelector(".contact-container");

// Scroll function
const scroll = (el) => {
  // Since navbar pos is fixed, account for height and include offset in y
  const navbarContainerHeight =
    document.getElementById("navbar-container").clientHeight;
  const y =
    el.getBoundingClientRect().top + window.scrollY - navbarContainerHeight;
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};

// scroll
document.getElementById("about-navbar-item").onclick = () =>
  scroll(aboutContainer);
document.getElementById("work-history-navbar-item").onclick = () =>
  scroll(workHistoryContainer);
document.getElementById("projects-navbar-item").onclick = () =>
  scroll(projectsContainer);
document.getElementById("contact-navbar-item").onclick = () =>
  scroll(contactContainer);

nameAnimation("Hello! I'm Eric Anderson");

// For Collapsable Projects
const collapsibleEl = document.querySelectorAll(".collapsible-button");
let i;

collapsibleEl.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    let content = button.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.alignText = "center";
    }
  });
});
