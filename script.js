const menu = document.getElementById('hamburger');
const closeMenu = document.querySelector('.links i');
const showMenu = document.querySelector('.showMenu');
const card = document.querySelector('.main-program');
const navItems = document.querySelectorAll('.showMenu li a');

menu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '0';
});

closeMenu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '-100%'
});


const cardData = [
  {
    id: 0,
    cardHead: 'Causes',
    cardImg: './images/incoming_data.svg',
    content: 'The risk of a cholera epidemic is highest when poverty, war or natural disasters force people to live in crowded conditions without adequate sanitation.',
  },
  {
    id: 1,
    cardHead: 'Symptoms',
    cardImg: './images/shaking.svg',
    content: 'Symptoms cause mild or moderate diarrhea are often hard to tell. Others develop more-serious signs usually within a few days of infection.',
  },
  {
    id: 2,
    cardHead: 'Treatments',
    cardImg: './images/treatment.svg',
    content: 'Cholera patients should be evaluated and treated quickly. With proper treatment, even severely ill patients can be saved.',
  },
  {
    id: 3,
    cardHead: 'Prone Areas',
    cardImg: './images/globe.svg',
    content: 'The risk of a cholera epidemic is highest when poverty, war or natural disasters force people to live in crowded conditions without adequate sanitation.',
  },
];


card.innerHTML = `
<div class="main-details">
<img src="${cardData[0].cardImg}" alt="Logo" />
<h3>${cardData[0].cardHead}</h3 >
  <p>${cardData[0].content}</p>
</div >

<div class="main-details">
<img src="${cardData[1].cardImg}" alt="Logo" />
<h3>${cardData[1].cardHead}</h3 >
  <p>${cardData[1].content}</p>
</div >

<div class="main-details">
<img src="${cardData[2].cardImg}" alt="Logo" />
<h3>${cardData[2].cardHead}</h3 >
  <p>${cardData[2].content}</p>
</div >

<div class="main-details">
<img src="${cardData[3].cardImg}" alt="Logo" />
<h3>${cardData[3].cardHead}</h3 >
  <p>${cardData[3].content}</p>
</div >
  `

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    showMenu.style.display = 'absolute';
    showMenu.style.left = '-100%'
  });
});
