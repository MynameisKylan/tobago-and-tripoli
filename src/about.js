let about = () => {
  let body = document.querySelector('body');
  let content = document.getElementById('content');
  content.classList.add('about');

  let about = document.getElementById('about');
  about.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');
  let headline = document.createElement('h1');
  let tagline = document.createElement('p');
  tagline.classList.add('text');

  headline.innerHTML = 'The Story of Tobago & Tripoli in San Diego';
  tagline.innerHTML = 'Since 2020, Tobago & Tripoli has been nowhere near the forefront of San Diego\' culinary scene. We invite you to experience our one-of-a-kind \'deficient delights\' which bridge the gap between the epicurean and the impecunius.';

  container.appendChild(headline);
  container.appendChild(tagline);
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
}

export default about;