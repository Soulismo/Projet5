const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Initialise la position du carrousel à 0
let position = 0;

// Détermine le nombre total de diapositives
const numberOfSlide = slides.length;

//  fonction pour créer le carrousel avec la position initiale
createCaroussel(position);

// fonction pour créer les indicateurs de point
createDots();

//fonction pour mettre à jour l'indicateur de point
updateDot();

// Sélectionne l'élément avec la classe CSS "arrow_left"
const left = document.querySelector(".arrow_left");

// Sélectionne l'élément avec la classe CSS "arrow_right"
const right = document.querySelector(".arrow_right");

// Ajoute un EventListener sur le clic de la flèche gauche
left.addEventListener("click", function () {
  // Ajout d'un console.log pour tester le clic de la flèche gauche
  console.log("Clic sur la flèche gauche");
  // Vérifie si la position actuelle est la première diapositive
  if (position == 0) {
    // Si oui, déplace la position à la dernière diapositive
    position = numberOfSlide - 1;
  } else {
    // Sinon, décrémente la position
    position--;
  }
  //  fonction pour mettre à jour le carrousel avec la nouvelle position
  createCaroussel(position);
});

// AventListener sur le clic de la flèche droite
right.addEventListener("click", function () {
  // Ajout d'un console.log pour tester le clic de la flèche droite
  console.log("Clic sur la flèche droite");
  // Vérifie si la position actuelle est la dernière diapositive
  if (position == numberOfSlide - 1) {
    // Si oui, déplace la position à la première diapositive
    position = 0;
  } else {
    // Sinon, incrémente la position
    position++;
  }
  //fonction pour mettre à jour le carrousel avec la nouvelle position
  createCaroussel(position);
});

// Définit une fonction pour créer les indicateurs de point
function createDots() {
  // Sélectionne l'élément contenant les indicateurs de point
  const dots = document.querySelector(".dots");

  // Boucle à travers toutes les diapositives pour créer un indicateur de point pour chacune
  for (let index = 0; index < slides.length; index++) {
    // Crée un nouvel élément de div pour représenter l'indicateur de point
    const dot = document.createElement("div");

    // Ajoute la classe CSS "dot" à l'indicateur de point
    dot.setAttribute("class", "dot");

    //indicateur de point à l'élément contenant les indicateurs de point
    dots.appendChild(dot);
  }
}

// Définit une fonction pour mettre à jour l'indicateur de point actif
function updateDot() {
  // Sélectionne tous les éléments avec la classe CSS "dot" (les indicateurs de point)
  const listPoints = document.querySelectorAll(".dot");

  // Parcourt tous les indicateurs de point
  for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index];
    // Vérifie si l'indice de l'indicateur de point correspond à la position actuelle du carrousel
    if (index == position) {
      // Si oui, ajoute la classe CSS "dot_selected" pour le marquer comme actif
      dot.classList.add("dot_selected");
    } else {
      // Sinon, supprime la classe CSS "dot_selected" s'il est déjà actif
      dot.classList.remove("dot_selected");
    }
  }
}

// Définit une fonction pour créer le carrousel avec la diapositive à la position donnée
function createCaroussel(position) {
  // Sélectionne l'élément de la diapositive correspondant à la position actuelle
  const element = slides[position];

  // Sélectionne l'élément de l'image du carrousel et met à jour son attribut src avec l'image de la diapositive actuelle
  const img = document.querySelector(".banner-img");
  img.setAttribute("src", "./assets/images/slideshow/" + element.image);

  // Sélectionne l'élément du texte du carrousel et met à jour son contenu avec le texte de la diapositive actuelle
  const p = document.querySelector(".banner-txt");
  p.innerHTML = element.tagLine;

  // Appelle la fonction pour mettre à jour l'indicateur de point
  updateDot();
}
