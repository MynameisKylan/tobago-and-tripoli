import home from './home';
import about from './about';
import clear from './clear';
import './reset.css';
import './style.css';

home();

// Home tab
let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
};

// About tab
let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
};