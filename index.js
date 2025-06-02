let movies = [
  {
name: "Sarkaru Vaari Paata",
des: "The film follows a conflict between Mahi, a financier and MP named Rajendranath, after his daughter Kalaavathi cons Mahi for her gambling debts..",
image: "images/sarkaru_vaari_paata.png",
  },
  {
    name: "Okkadu",
    des: "Ajay is in Kurnool for a kabaddi match when he saves Swapna from being forced to marry a brutal factionist. He hides her in his house in Hyderabad until she has an opportunity to reach the U.S. But, fate has other plans.",
    image: "images/okkadu.png",
  },
  {
    name: "Guntur Kaaram",
    des: " Ramana has a mirchi manufacturing factory and lives in Guntur with his father side of the family.",
    image: "images/gk_poster.png",
   
  },
  {
    name: "Businessman",
    des: "A highly ambitious man named Surya Bhai visits Mumbai with the notion of ruling the city. He turns into a local gangster and manages to become a powerful businessman, though, his intentions are not what they seem",
    image: "images/businesman_1.png",
  },
  {
    name: "Dookudu",
    des: "The film revolves around Ajay Kumar (Babu), a police officer and son of ex-MLA Shankar Narayana (Raj), who awakes from coma, but his health remains perilous. To aid his recovery, Kumar masquerades as a MLA fulfilling his father's ambition for him, while also hunting his father's foes..",
    image: "images/dookudu1.png",
  },
];

const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Create slide structure
  const slide = document.createElement('div');
  const imgElement = document.createElement('img');
  const content = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  // Populate slide content
  imgElement.src = movies[slideIndex].image;
  h1.textContent = movies[slideIndex].name;
  p.textContent = movies[slideIndex].des;

  // Append elements
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  slide.appendChild(content);
  carousel.appendChild(slide);

  // Add classes
  slide.className = 'slider';
  content.className = 'slide-content';
  h1.className = 'movie-title';
  p.className = 'movie-des';

  // Push slide to the sliders array
  sliders.push(slide);

  // Adjust margin for sliding effect
  if (sliders.length > 1) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${
      30 * (sliders.length - 1)
    }px)`;
  }

  slideIndex++;
};

// Initial slides
for (let i = 0; i < 3; i++) {
  createSlide();
}

// Auto-slide creation
setInterval(() => {
  createSlide();
}, 3000);

// Video card hover functionality
const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const video = item.children[1];
    if (video && video.tagName === 'VIDEO') {
      video.play();
    }
  });

  item.addEventListener('mouseleave', () => {
    const video = item.children[1];
    if (video && video.tagName === 'VIDEO') {
      video.pause();
    }
  });
});

// Card scrolling functionality
const cardContainers = [...document.querySelectorAll('.card-container')];
const preBtns = [...document.querySelectorAll('.pre-btn')];
const nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
  const containerDimensions = item.getBoundingClientRect();
  const containerWidth = containerDimensions.width;

  if (nxtBtns[i]) {
    nxtBtns[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth - 200;
    });
  }

  if (preBtns[i]) {
    preBtns[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth - 200;
    });
  }
});



