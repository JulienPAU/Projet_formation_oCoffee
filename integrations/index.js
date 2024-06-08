const menu = document.querySelector(".fa-bars");

menu.addEventListener("click", (event) => {
  event.preventDefault();
  const navbar = document.querySelector(".hidden_nav");
  navbar.classList.toggle("hidden");
});

// const darkMode = document.querySelector(".fa-toggle-on");
// darkMode.addEventListener("click", (event) => {
//   event.preventDefault();
//   const night = document.querySelector(".body_container");
//   night.classList.toggle("dark-mode");
// });

const darkModeToggle = document.querySelector(".fa-toggle-on");
const bodyContainer = document.querySelector(".body_container");
const mainContainer = document.querySelector(".main_container");

// Vérifier la préférence du mode sombre au chargement de la page
window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    enableDarkMode();
    bodyContainer.classList.add("transition-done");
    mainContainer.classList.add("transition-done");
  }
};

// Fonction pour activer le mode sombre
function enableDarkMode() {
  // Ajouter la classe CSS pour le mode sombre au conteneur du corps de la page
  bodyContainer.classList.add("dark-mode");
  mainContainer.classList.add("dark-mode");
  // Enregistrer la préférence du mode sombre dans le Local Storage
  localStorage.setItem("darkMode", "true");
  // Ajouter la classe "transition-done" après la fin de la transition
  setTimeout(() => {
    bodyContainer.classList.add("transition-done");
    mainContainer.classList.add("transition-done");
  }, 1000);
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
  // Supprimer la classe CSS pour le mode sombre du conteneur du corps de la page
  bodyContainer.classList.remove("dark-mode");
  mainContainer.classList.remove("dark-mode");
  // Supprimer la classe "transition-done" pour que la transition puisse se relancer
  bodyContainer.classList.remove("transition-done");
  mainContainer.classList.remove("transition-done");
  // Enregistrer la préférence du mode clair dans le Local Storage
  localStorage.setItem("darkMode", "false");
}

// Ajouter un écouteur d'événement sur le bouton de bascule du mode sombre
darkModeToggle.addEventListener("click", (event) => {
  event.preventDefault();
  // Basculer entre le mode sombre et le mode clair
  if (localStorage.getItem("darkMode") === "true") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

document
  .getElementById("Coffee-select")
  .addEventListener("change", function () {
    const selectedOption = this.options[this.selectedIndex];
    window.location.href = selectedOption.value;
  });
