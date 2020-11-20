let footer = () => {
  let footer = document.createElement('footer');
  let footerText = document.createElement('p');
  footerText.innerHTML = 'Copyright © Kylan International. All rights reserved. Sike, I have no rights.'
  footer.appendChild(footerText);
  let body = document.querySelector('body');
  body.appendChild(footer);
};

export default footer;