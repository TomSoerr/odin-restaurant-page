import './style.css';
import header from './header.js';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

class restaurantPage {
  #content = document.querySelector('#content');

  constructor() {
    this.#homePage();
  }

  #createTab(tabName) {
    const tab = document.createElement('p');
    tab.classList.add('tab');
    tab.textContent = tabName;
    return tab;
  }

  #homePage() {
    const menuTab = this.#createTab('Menu');
    menuTab.addEventListener('click', () => {
      this.#menuPage();
    });
    const contactTab = this.#createTab('Contact');
    contactTab.addEventListener('click', () => {
      this.#contactPage();
    });
    
    this.#content.replaceChildren(
      header([menuTab, contactTab]),
      home(),
    );
  }

  #menuPage() {
    const homeTab = this.#createTab('Home');
    homeTab.addEventListener('click', () => {
      this.#homePage();
    });
    const contactTab = this.#createTab('Contact');
    contactTab.addEventListener('click', () => {
      this.#contactPage();
    });

    this.#content.replaceChildren(
      header([homeTab, contactTab]),
      menu(),
    );
  }

  #contactPage() {
    const homeTab = this.#createTab('Home');
    homeTab.addEventListener('click', () => {
      this.#homePage();
    });
    const menuTab = this.#createTab('Menu');
    menuTab.addEventListener('click', () => {
      this.#menuPage();
    });

    this.#content.replaceChildren(
      header([homeTab, menuTab]),
      contact(),
    );
  }
}

const page = new restaurantPage();
