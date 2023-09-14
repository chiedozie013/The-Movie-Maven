import logo from '../assets/logo.png';

const header = () => {
  const nav = document.querySelector('.nav-header');
  nav.innerHTML = `
    <div class="nav-bar">
    <div class="nav-title">
    <a href="iner.html"><img id="logo" src="${logo}" alt="logo"></a>
    <p>The Movie Maven<p>
    </div>
    <ul class="nav-list">
    <li><a href="#">Home</a><li>
    <li><a href="#">About</a><li>
    <li><a href="#">Movies(<span id="counter"></span>)</a></li>
    </ul>
    </div>
   `;
};

export default header;

// hDkEluBB7846EKcvd1Hz
