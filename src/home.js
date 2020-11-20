import nav from './nav';

let home = () => {
  let content = document.getElementById('content');

  let navbar = nav()
  content.appendChild(navbar);
  let home = document.getElementById('home');
  home.classList.add('active');

  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Tobago & Tripoli';
  header.appendChild(headline);

  let tagline = document.createElement('p');
  tagline.innerHTML = 'Where Bougie Meets Poverty';
  header.appendChild(tagline);

  content.appendChild(header);

  let footer = document.createElement('footer');
  let footerText = document.createElement('p');
  footerText.innerHTML = 'Copyright © Kylan International. All rights reserved. Sike, I have no rights.'
  footer.appendChild(footerText);
  let body = document.querySelector('body');
  body.appendChild(footer);
}

export default home