// ----- Hamburger button pop up menu ------- //

const hamburgerButton = document.querySelector('#hamburger-menu');

const overlayMenu = document.querySelector('.overlay-menu');

const close = document.querySelector('.close');

const portfolio = document.querySelector('#portfolio-link');
const about = document.querySelector('#about-link');
const contact = document.querySelector('#contact-link');

hamburgerButton.onclick = function () {
  overlayMenu.style.display = 'block';
};

close.onclick = function () {
  overlayMenu.style.display = 'none';
};

portfolio.onclick = function () {
  overlayMenu.style.display = 'none';
};

about.onclick = function () {
  overlayMenu.style.display = 'none';
};

contact.onclick = function () {
  overlayMenu.style.display = 'none';
};

// ----- Popup Card for projects ------- //

const cardInfo = [
  {
    name: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    desctiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a thing.",
    techstack: ['html', 'css', 'javasctipt'],
    imageUrl: "src/images/card-cover1.png"
  },
  {
    name: 'Multi-Post Stories',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    desctiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a thing.",
    techstack: ['html', 'css', 'javasctipt'],
    imageUrl: "src/images/card-cover2.png"
  },
  {
    name: 'Tonic',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    desctiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a thing.",
    techstack: ['html', 'css', 'javasctipt'],
    imageUrl: "src/images/card-cover3.png"
  },
  {
    name: 'Multi-Post Stories',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    desctiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a thing.",
    techstack: ['html', 'css', 'javasctipt'],
    imageUrl: "src/images/card-cover4.png"
  }
];

const cardModal = document.querySelector('.card-modal');
const cardModalContainer = document.querySelector('.card-modal-container');

const firstCardBtn = document.querySelector('#first-card-button');
const secondCardBtn = document.querySelector('#second-card-button');
const thirdCardBtn = document.querySelector('#third-card-button');
const forthCardBtn = document.querySelector('#forth-card-button');

function generate_popup(cardNum) {
  cardModalContainer.style.display = 'block';
  const info = cardInfo[cardNum];
  cardModal.innerHTML = `
  <div class="card card${cardNum + 1} popup-card">
    <div class="popup-header">
      <div class="modal-title-container">
        <h2 class="card-title">${info.name}</h2>
        <button type="button"class="close-modal">&times;</button>
      </div>  
      <ul class="card-details">
        <li class="prim-detail-cap">${info.company}</li>
        <li><img src="src/icons/counter.svg" alt="circle dots"></li>
        <Li class="sec-detail-cap">${info.role}</Li>
        <li><img src="src/icons/counter.svg" alt="circle dots"></li>
        <li class="sec-detail-cap">${info.year}</li>
      </ul>
    </div> 
    <img class="card-cover" src="${info.imageUrl}" alt="image of previous work example">
    <div class="card-info">
      <p class="description">
       ${info.desctiption}
      </p>
      <div class="card-info-sub">
        <ul class="techstack">
          <li>${info.techstack[0]}</li>
          <li>${info.techstack[1]}</li>
          <li>${info.techstack[2]}</li>
        </ul>
        <div class="popup-buttons">
          <button class="card-button" type="button" id="modalBtn1">See Live
            <img src="src/icons/see-live.svg">
          </button>
          <button class="card-button" type="button" id="modalBtn2">See Source
            <img src="src/icons/see-source-github.svg">
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
  const closeModal = document.querySelector('.close-modal');
  closeModal.addEventListener('click', closeModalFunc);
};
function closeModalFunc () {
  cardModalContainer.style.display = 'none';
}

firstCardBtn.addEventListener('click', () => {
  generate_popup(0);
});
secondCardBtn.addEventListener('click', () => {
  generate_popup(1);
});
thirdCardBtn.addEventListener('click', () => {
  generate_popup(2);
});
forthCardBtn.addEventListener('click', () => {
  generate_popup(3);
});

window.onclick = function(event) {
  if (event.target == cardModalContainer) {
    cardModalContainer.style.display = "none";
  }
} 