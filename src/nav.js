let nav = () => {
  let nav = document.createElement('nav');
  let home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
  let about = document.createElement('button');
  about.innerHTML = 'About';
  about.id = 'about';
  let menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  let contact = document.createElement('button');
  contact.innerHTML = 'Contact Us';
  contact.id = 'contact';
  nav.appendChild(home);
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

export default nav;