import './style.css';

const content = document.querySelector('#content');

const component = () => {
  const obj = document.createElement('div');
  const heading = document.createElement('h1');
  heading.textContent = 'Hello World';
  heading.classList.add('heading');
  obj.appendChild(heading);
  return obj;
};

content.appendChild(component());