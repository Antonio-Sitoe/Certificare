const menuMobile = () => {
  const btn = document.querySelector('#buttonToogle'),
    menu = document.querySelector('#menu'),
    certification = document.querySelector('#btnMenu'),
    modal = document.querySelector('.modalbg'),
    closeSpan = document.querySelector('#modalspan');
  const services = document.querySelectorAl('#services');

  function openMenu() {
    if (menu) menu.classList.toggle('active');
  }
  function openModal(e) {
    e.preventDefault();
    if (modal) modal.classList.toggle('active');
  }
  if (btn) btn.addEventListener('click', openMenu);
  if (certification) certification.addEventListener('click', openModal);
  if (closeSpan) closeSpan.addEventListener('click', openModal);
  if (services)
    services.addEventListener('click', () => {
      if (menu) menu.classList.remove('active');
    });
};

export default menuMobile;
