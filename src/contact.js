function contact() {
  function create(tag) {
    return document.createElement(tag);
  }

  const page = create('div');
  page.classList.add('page');

  // content

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

  page.append( footer);
  return page;
}

export default contact;
