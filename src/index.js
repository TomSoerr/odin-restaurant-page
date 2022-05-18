import './style.css';
import header from './header.js';
import home from './home.js';

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
    // be aware of this in the EventListener function
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
    console.log('menuPage');
  }

  #contactPage() {
    console.log('contactPage');
  }
}

const page = new restaurantPage();