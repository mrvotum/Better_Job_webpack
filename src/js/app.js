import CreateForm from './createForm';

const burgerBtn = document.querySelector('[data-id=burgerBtn]');
const linksHolder = document.querySelector('[data-id=linksHolder]');

burgerBtn.addEventListener('click', () => {
  // открыть/закрыть меню
  linksHolder.classList.toggle('links_active');
  burgerBtn.classList.toggle('menu-btn_active');
});

linksHolder.addEventListener('click', (event) => {
  if (event.target.className === 'links_btn') {
    // закрыть меню
    linksHolder.classList.toggle('links_active');
    burgerBtn.classList.toggle('menu-btn_active');
  }
});

const getGreen = document.querySelector('[data-id=getGreen]');
getGreen.addEventListener('click', () => {
  new CreateForm().create();
});
