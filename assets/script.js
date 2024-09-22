const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// ETAPE 2 - Ajout des flèches sur slider//
const leftArrow = document.querySelector('.arrow_left');
console.log(leftArrow);

const rightArrow = document.querySelector('.arrow_right');
console.log(rightArrow);

// Ajout écouteurs d'évènement sur les flèches //
leftArrow.addEventListener('click',()=>{
	console.log('Clique sur la flèche gauche')
})

rightArrow.addEventListener('click',()=>{
	console.log('Clique sur la flèche droite')
})

// ETAPE 3 - On récupère les éléments du DOM nécessaires // 
const slideImage = document.querySelector('.banner-img');
const slideTagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const dots = document.querySelectorAll('.dot');

console.log(slideImage);
console.log(slideTagline);
console.log(dotsContainer);
console.log(dots);

let currentSlide = 0; 

const generateDots = () => {
    for (let index = 0; index < slides.length; index++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        
        if (index === 0) {
            dot.classList.add('dot_selected');
        }

        dotsContainer.appendChild(dot);
    }
};

generateDots();

// ETAPE 4 - Fonction pour mettre à jour l'image, le texte et les dots //
function updateSlide(index) {
    slideImage.src = `./assets/images/slideshow/${slides[index].image}`;
    slideTagline.innerHTML = slides[index].tagLine;

	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, dotIndex) => {
		dot.classList.toggle('dot_selected', dotIndex === index);
	});
  
	// Mise à jour l'index du slide //
	currentSlide = index;
  }

// ETAPE 5 - Défilement infini du slider //

 document.querySelector('.arrow_right').addEventListener('click', function() {
    let nextSlide = (currentSlide + 1) % slides.length; 
    updateSlide(nextSlide);
});

document.querySelector('.arrow_left').addEventListener('click', function() {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length; 
    updateSlide(prevSlide);
});

// Initialisation du slider//
function initSlider() {
    updateSlide(0); 
}

initSlider();
 