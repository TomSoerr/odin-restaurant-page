function menu() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const menuOneImg = create('div');
  menuOneImg.id = 'menu-1';
  const menuOneTextWrapper = create('div');
  menuOneTextWrapper.id = 'menu-1-text';
  const menuOneHeading = create('h2');
  menuOneHeading.textContent = 'Vegan Bowl';
  const menuOneDescription = create('p');
  menuOneDescription.textContent = (
    'The Vegan Bowl is a vegan salad with tofu; cheese, kale, avocado, tomatoes, onion, etc. \r\n Tamarind\'s Veggie Bowl is a bowl of vegetables that can be had in only two sizes! \r\n One size up, like vegan or gluten free. Try our Vegan Cheese Bowl with all the vegan cheese you want. Our tofu bowl has 1/4 cup vegan butter, 1/4 cup vegan soy cheese, 1/2 cup brown sugar. We use soy and coconut butter and try to use 100% in bulk (1 Tbsp to the amount you need for this bowl). As always, there is a limit on how much you can add, but if you\'re making them with almond milk or other dairy and butter substitutes, add 2 small bags.'
  );
  menuOneTextWrapper.append(menuOneHeading, menuOneDescription);

  const menuTwoImg = create('div');
  menuTwoImg.id = 'menu-2';
  const menuTwoTextWrapper = create('div');
  menuTwoTextWrapper.id = 'menu-2-text';
  const menuTwoHeading = create('h2');
  menuTwoHeading.textContent = 'Vegan Pizza';
  const menuTwoDescription = create('p');
  menuTwoDescription.textContent = 'A vegan pizza with a side of fries.';
  menuTwoTextWrapper.append(menuTwoHeading, menuTwoDescription);

  const menuThreeImg = create('div');
  menuThreeImg.id = 'menu-3';
  const menuThreeTextWrapper = create('div');
  menuThreeTextWrapper.id = 'menu-3-text';
  const menuThreeHeading = create('h2');
  menuThreeHeading.textContent = 'Vegan Salad';
  const menuThreeDescription = create('p');
  menuThreeDescription.textContent = 'A vegan salad with a side of fries.';
  menuThreeTextWrapper.append(menuThreeHeading, menuThreeDescription);

  const footer = create('div');
  footer.id = 'footer';
  const footerText = create('p');
  footerText.textContent = '© 2020 The Vegan Chef';
  const githubText = create('p');
  const githubLink = create('a');
  githubLink.href = 'https://github.com/TomSoerr/odin-restaurant-page';
  githubLink.textContent = 'GitHub';
  githubText.append(githubLink);
  footer.append(footerText, githubText);

  page.append(
    menuOneImg,
    menuOneTextWrapper,
    menuTwoTextWrapper,
    menuTwoImg,
    menuThreeImg,
    menuThreeTextWrapper,
    footer,
  );
  return page;
}

export default menu;
