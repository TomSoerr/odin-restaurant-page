function contact() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  const personOne = create('div');
  personOne.id = 'person-one';
  const personOneImg = create('div');
  personOneImg.classList.add('person-img');
  const personOneName = create('h2');
  personOneName.textContent = 'Cao Đức Vỹ';
  const personOneDescription = create('p');
  personOneDescription.textContent = (
    'I eat sushi and sushi and I usually get pretty good. But when it comes to sushi I love making great sushi! I got a lot of great sushi that I have not eaten in years. The great ones are my personal favourite and I have been making and selling some for over 30 years now. These amazing sushi items were made on my own and I make them myself. I really loved them! So I make them again and again. My mom makes them every day in the kitchen making so many of them. I find that sometimes it takes days before I get a good sushi. So I just make those everyday and make them whenever I am hungry and don\'t like it when I need them at all and usually when I like them too much so they make too bad. Now when I\'m hungry about 10 mins or so ago I get so much good sushi. And the last time I got so much bad sushi my sister gave me the best because her whole mouth was open on it so we can see it if we want to. I love this place. The staff is nice and friendly and the shop has a nice selection of things from the local sushi. The price is really great and the service is fast and good. They try to make things for you but it just so happens not many places do that. I love it.'
  );
  personOne.append(personOneImg, personOneName, personOneDescription);

  const personTwo = create('div');
  personTwo.id = 'person-two';
  const personTwoImg = create('div');
  personTwoImg.classList.add('person-img');
  const personTwoName = create('h2');
  personTwoName.textContent = 'Nguyễn Thị Hải';
  const personTwoDescription = create('p');
  personTwoDescription.textContent = (
    'I\'m an incredibly passionate vegan and I love making healthy, delicious, healthy things - like tofu, raw veggies, tofu-garlic, etc. I am also a huge proponent of the \'garnish\' industry. I am also a big proponent of giving everyone a healthy vegan diet, which has turned me towards the vegan lifestyle and made ME happy.\' - Vegan Chef! We get very well attended Vegan Chef courses and there\'s some very exciting and beautiful cooking at our restaurants and places as well'
  );
  personTwo.append(personTwoImg, personTwoName, personTwoDescription);

  // maps

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

  page.append(personOne, personTwo, footer);
  return page;
}

export default contact;
