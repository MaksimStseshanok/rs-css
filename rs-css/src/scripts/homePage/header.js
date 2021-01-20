const header = document.createElement('header');
const headerTitle = document.createElement('h1');

headerTitle.textContent = 'CSS school';
headerTitle.classList.add('header__title');
header.classList.add('header')
header.appendChild(headerTitle);
export { header };