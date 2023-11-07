import '../css/style.css';
console.log('calling from src main.ts');

const createNavbar = (list: Array<string>) => {
  const navbar = document.getElementById('sitewide-navbar');

  const ul = navbar.appendChild(document.createElement('ul'));
  for (const page of list) {
    const li = ul.appendChild(document.createElement('li'));
    const a = li.appendChild(document.createElement('a'));
    a.href = `./${page.toLowerCase()}.html`;
    a.text = page;
  }
};

createNavbar(['Index', 'Home']);
