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
    name: 'SummerWave<br>Hotels',
    company: 'SMCO',
    role: 'Full-Stack Dev',
    year: '2023',
    desctiption: "SummerWave Hotels is a website to reserve rooms for the SummerWave Hotel chains. You can select available rooms from a gaphic list in the home page of the website, or you can just click on the reserve menu item and see the full list of available rooms and the city in which they are available.",
    techstack: ['React', 'Redux', 'Ruby on Rails'],
    imageUrl: 'src/images/card-cover1.png',
    githubLink: 'https://github.com/dev89s/final-capstone-front-end',
    liveDemoLink: 'https://summerwave-hotels.onrender.com/',
  },
  {
    name: 'Weather Quality',
    company: 'SMCO',
    role: 'Full-Stack Dev',
    year: '2023',
    desctiption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent. ",
    techstack: ['React', 'Redux', 'Third Party API'],
    imageUrl: 'src/images/card-cover2.png',
    githubLink: 'https://github.com/dev89s/air-quality-mobile',
    liveDemoLink: 'https://weather-and-air-quality.onrender.com/home',
  },
  {
    name: 'Bookstore CMS',
    company: 'SMCO',
    role: 'Front-End Dev',
    year: '2023',
    desctiption: "Simple Bookstore CMS project that displays a list of books that have a name, an author, and a category. It uses React Router and an Online API to save book entries. (the progress section is cosmetic for now)",
    techstack: ['React', 'Online API', 'JavaScript', 'WebPack'],
    imageUrl: 'src/images/card-cover3.png',
    githubLink: 'https://github.com/dev89s/bookstore',
    liveDemoLink: 'https://bookstore-cms-7ctr.onrender.com',
  },
  {
    name: 'WebDev Academy',
    company: 'SMCO',
    role: 'Front-End Dev',
    year: '2023',
    desctiption: "WebDev Academy is an example of mobile first Online Educational Intitution website. It's purpose is to represent the institution, its different courses and the famous teachers from all around the world while giving the user a welcome feeling and a way to join the program.",
    techstack: ['html', 'css', 'javasctipt'],
    imageUrl: 'src/images/card-cover4.png',
    githubLink: 'https://github.com/dev89s/webdev-inst',
    liveDemoLink: 'https://dev89s.github.io/webdev-inst/',
  },
];

function loadCards(cardInfo) {
  const projects = document.querySelector('.projects');
  for (let i = 0; i < cardInfo.length; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card');
    const label = `card${i + 1}`;
    card.classList.add(label);
    if (i % 2 === 0) {
      card.classList.add('even');
    } else {
      card.classList.add('odd');
    }
    card.innerHTML = `
    <img class="card-cover" src="${cardInfo[i].imageUrl}" alt="image of previous work example">
    <div class="card-info">
      <h2 class="card-title">${cardInfo[i].name}</h2>
      <ul class="card-details">
        <li class="prim-detail-cap">${cardInfo[i].company}</li>
        <li><img src="src/icons/counter.svg" alt="circle dots"></li>
        <Li class="sec-detail-cap">${cardInfo[i].role}</Li>
        <li><img src="src/icons/counter.svg" alt="circle dots"></li>
        <li class="sec-detail-cap">${cardInfo[i].year}</li>
      </ul>
      <p class="description">
        ${cardInfo[i].desctiption}
      </p>
      <ul class="techstack card-techstack-${i + 1}">
      </ul>
      <button class="card-button" type="button" id="card-button-${i + 1}">See Project</button>
    </div>
  `;
    projects.appendChild(card);
    const techstack = document.querySelector(`.card-techstack-${i + 1}`);
    cardInfo[i].techstack.forEach(info => {
      const li = document.createElement("li");
      li.textContent = info;
      techstack.appendChild(li);
    });
  }
}
loadCards(cardInfo);

const cardModal = document.querySelector('.card-modal');
const cardModalContainer = document.querySelector('.card-modal-container');

const firstCardBtn = document.querySelector('#card-button-1');
const secondCardBtn = document.querySelector('#card-button-2');
const thirdCardBtn = document.querySelector('#card-button-3');
const forthCardBtn = document.querySelector('#card-button-4');

function generatePopup(cardNum) {
  cardModalContainer.style.display = 'flex';
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
        <ul class="techstack popup-card-techstack-${cardNum + 1}">
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

  const popupCardTechStack = document.querySelector(`.popup-card-techstack-${cardNum + 1}`);
  info.techstack.forEach(technology => {
    const li = document.createElement("li");
    li.textContent = technology;
    popupCardTechStack.appendChild(li);
  });

  const closeModal = document.querySelector('.close-modal');
  function closeModalFunc() {
    cardModalContainer.style.display = 'none';
  }
  closeModal.addEventListener('click', closeModalFunc);

  const liveDemoLink = document.querySelector("#modalBtn1");
  liveDemoLink.addEventListener("click", () => {
    window.open(`${info.liveDemoLink}`);
  })
  const githubLinkBtn = document.querySelector("#modalBtn2");
  githubLinkBtn.addEventListener("click", () => {
    window.open(`${info.githubLink}`);
  })
}

firstCardBtn.addEventListener('click', () => {
  generatePopup(0);
});
secondCardBtn.addEventListener('click', () => {
  generatePopup(1);
});
thirdCardBtn.addEventListener('click', () => {
  generatePopup(2);
});
forthCardBtn.addEventListener('click', () => {
  generatePopup(3);
});

window.onclick = function (event) {
  if (event.target === cardModalContainer) {
    cardModalContainer.style.display = 'none';
  }
};

// -------------- About me --------------- //

const resumeBtn = document.querySelector(".resume-link");
resumeBtn.addEventListener("click", () => {
  window.open("https://docs.google.com/document/d/1xdRXVMySL9_0LnDQvNxzeGsRitsEDfNLiYiSCAnvp5k/edit?usp=sharing");
})

const aboutTitle = document.querySelector(".about-title");

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    aboutTitle.textContent = "About Myself";
  } else {
    aboutTitle.innerHTML = "About<br>Myself"
  }
})

// ------ Contact Form validation -------- //
const contactForm = document.querySelector('.contact-form');
const contactError = document.querySelector('.contact-error');
const emailInput = document.querySelector('#email');

window.addEventListener('load', () => {
  if (emailInput.value === '') {
    contactError.style.display = 'none';
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value === '') {
    contactError.style.display = 'none';
  }
});

contactForm.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    contactError.style.display = 'block';
    contactError.textContent = 'Email address should be lowercase';

    event.preventDefault();
  }
});

// ------- Form Local Storage -------- //

const nameInput = document.querySelector('#name');
// emailInput declared before
const messageInput = document.querySelector('#description');

let form = {};
function populateStorage() {
  form.name = nameInput.value;
  form.email = emailInput.value;
  form.message = messageInput.value;
  const formStr = JSON.stringify(form);
  localStorage.setItem('form', formStr);
}

function restoreForm() {
  const formStr = localStorage.getItem('form');
  form = JSON.parse(formStr);
  nameInput.value = form.name;
  emailInput.value = form.email;
  messageInput.value = form.message;
}

if (localStorage.getItem('form')) {
  restoreForm();
} else {
  populateStorage();
}

nameInput.addEventListener('change', populateStorage);
emailInput.addEventListener('change', populateStorage);
messageInput.addEventListener('change', populateStorage);

contactForm.addEventListener('submit', () => {
  localStorage.setItem('form', '');
});
