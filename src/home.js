import nav from './nav';
import footer from './footer';

let home = () => {
  let content = document.getElementById('content');
  content.classList.add('home');

  if (!document.querySelector('nav')) {
    let navbar = nav()
    content.appendChild(navbar);
  }
  let home = document.getElementById('home');
  home.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  let header = document.createElement('header');
  let headline = document.createElement('h1');
  headline.innerHTML = 'Tobago & Tripoli';
  header.appendChild(headline);
  container.appendChild(header);

  let tagline = document.createElement('p');
  tagline.innerHTML = 'Where Bougie Meets Broke';
  header.appendChild(tagline);

  content.appendChild(container);

  footer();
}

export default home