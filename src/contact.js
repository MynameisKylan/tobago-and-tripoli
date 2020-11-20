let contact = () => {
  let content = document.getElementById('content');
  content.classList.add('contact');

  let contactBtn = document.getElementById('contact');
  contactBtn.classList.add('active');

  let container = document.createElement('div');
  container.classList.add('container');

  let headline = document.createElement('h1');
  headline.innerHTML = 'Get in Touch';
  let tagline = document.createElement('p');
  tagline.innerHTML = 'Our team of elite chefs would love to hear from you. Give us a call or send us an email.'

  let phone = document.createElement('p');
  phone.innerHTML = 'Phone: (619) 123-4567';
  let email = document.createElement('p');
  email.innerHTML = 'Email: tobago@tripoli.com';

  container.appendChild(headline);
  container.appendChild(tagline);
  container.appendChild(phone);
  container.appendChild(email);

  let body = document.querySelector('body');
  let footer = document.querySelector('footer');
  body.insertBefore(container, footer);
}

export default contact;