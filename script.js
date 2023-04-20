const menu = document.getElementById('hamburger');
const closeMenu = document.querySelector('.links i');
const showMenu = document.querySelector('.showMenu');
const speakers = document.querySelector('.experts');
const navItems = document.querySelectorAll('.showMenu li a');

menu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '0';
});

closeMenu.addEventListener('click', () => {
  showMenu.style.display = 'absolute';
  showMenu.style.left = '-100%';
});

const speakerData = [
  {
    id: 0,
    personImg: './images/AnnahAsamoah.png',
    personName: 'Dr. Annah Asamoah',
    placeofWork: 'Okomfo Anokye Teaching Hospital',
    duties: 'Department of Clinical Microbiology, Virology/Serology Unit. She is currently working on the identification of a second strain of extensively drug-resistant (XDR) gonorrhea.',
  },
  {
    id: 1,
    personImg: './images/AsareBediako.png',
    personName: 'Dr. Asare Bediako',
    placeofWork: 'Ridge Government Hospital',
    duties: 'Gastroenterologists who has specialized in abdominal pain, ulcers, diarrhea, jaundice, or cancers in your digestive organs. He also do a colonoscopy and other tests for colon cancer.',
  },
  {
    id: 2,
    personImg: './images/FeliciaAgoka.png',
    personName: 'Dr. Felicia Agoka',
    placeofWork: '37 Military Hospital',
    duties: 'Cares for the whole family from children to the elderly, giving basic care. She does routine check-ups and screening tests, attending to ongoing medical conditions.',
  },
  {
    id: 3,
    personImg: './images/FrankAdjei.png',
    personName: 'Dr. Frank Adjei',
    placeofWork: 'Okomfo Anokye Teaching Hospital',
    duties: 'An endocrinologist who treats the endocrine system. The glands producing and secreting hormones that regulate and control almost all of the bodys functions.',
  },
  {
    id: 4,
    personImg: './images/PriscillaAryee.png',
    personName: 'Dr. Priscilla Aryee',
    placeofWork: 'Korle-Bu Teaching Hospital',
    duties: 'Infectious Disease Specialists who diagnose and treat infections in any part of your body, like fevers, Lyme disease, pneumonia, tuberculosis, and HIV and AIDS.',
  },
  {
    id: 5,
    personImg: './images/MariamOsei.png',
    personName: 'Mrs Mariam Osei',
    placeofWork: 'Fiber Systems Engineer at Vodafone Ghana',
    duties: 'She designs, develops, and implements systems and databases to access and store geospatial data, analyze spatial and non-spatial information.',
  },
];

speakers.innerHTML = `
<div class="experts-details">
<img src="${speakerData[0].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[0].personName}</h3>
  <p class="experts-place">${speakerData[0].placeofWork}</p>
  <p class="experts-achieve">${speakerData[0].duties}
  </p>
</div>
</div>

<div class="experts-details">
<img src="${speakerData[1].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[1].personName}</h3>
  <p class="experts-place">${speakerData[1].placeofWork}</p>
  <p class="experts-achieve">${speakerData[1].duties}
  </p>
</div>
</div>

<div class="experts-details">
<img src="${speakerData[2].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[2].personName}</h3>
  <p class="experts-place">${speakerData[2].placeofWork}</p>
  <p class="experts-achieve">${speakerData[2].duties}
  </p>
</div>
</div>

<div class="experts-details">
<img src="${speakerData[3].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[3].personName}</h3>
  <p class="experts-place">${speakerData[3].placeofWork}</p>
  <p class="experts-achieve">${speakerData[3].duties}
  </p>
</div>
</div>

<div class="experts-details">
<img src="${speakerData[4].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[4].personName}</h3>
  <p class="experts-place">${speakerData[4].placeofWork}</p>
  <p class="experts-achieve">${speakerData[4].duties}
  </p>
</div>
</div>

<div class="experts-details">
<img src="${speakerData[5].personImg}" alt="Dr Annah" />
<div class="experts-info">
  <h3 class="experts-name">${speakerData[5].personName}</h3>
  <p class="experts-place">${speakerData[5].placeofWork}</p>
  <p class="experts-achieve">${speakerData[5].duties}
  </p>
</div>
</div>
  `;

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    showMenu.style.display = 'absolute';
    showMenu.style.left = '-100%';
  });
});
