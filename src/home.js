function home() {
  const page = document.createElement('div');
  page.classList.add('page');

  const welcomeDiv = document.createElement('div');
  welcomeDiv.id = 'welcome';
  const welcomeTextWrapper = document.createElement('div');
  welcomeTextWrapper.id = 'welcome-text-wrapper';
  const welcomeText = document.createElement('p');
  welcomeText.id = 'welcome-text';
  const welcomeTextSpan = document.createElement('span');
  welcomeTextSpan.textContent = 'The Vegan Chef \r\n';
  welcomeText.append(
    welcomeTextSpan,
    'We are a four star vegan only Restaurant in Austria. Come and visit us. You will not be disappointed!',
  );
  welcomeTextWrapper.append(welcomeText);
  welcomeDiv.append(welcomeTextWrapper);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.id = 'description';
  const descriptionHeader = document.createElement('h2');
  descriptionHeader.textContent = 'Our Story';
  descriptionHeader.id = 'description-header';
  const descriptionText = document.createElement('p');
  descriptionText.id = 'description-text';
  descriptionText.textContent = (
    'Our restaurant was founded in the early 2000s by a group of friends who wanted to create a new kind of restaurant. The main reason for the establishment\'s success is that their menu is fresh and delicious but also serves all the foods they choose to put in their menu. We have numerous specialties and many others which are just plain good food. Many have a great value to the food and our local friends have always been there to make that special food even better. The menu is also very different to how any restaurant usually is. As for the food, we all eat a special diet so any time we go to a restaurant and enjoy a unique experience, we will always have something we can make special because we aren\'t trying to take the food away from the place which has great value to the area.'
  );
  descriptionDiv.append(descriptionHeader, descriptionText);

  page.append(welcomeDiv, descriptionDiv);
  return page;
}

export default home;