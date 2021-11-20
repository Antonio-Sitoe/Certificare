const menuMobile = () => {
  const btn = document.querySelector('#buttonToogle'),
    menu = document.querySelector('#menu'),
    certification = document.querySelector('#btnMenu'),
    modal = document.querySelector('.modalbg'),
    closeSpan = document.querySelector('#modalspan');

  function openMenu() {
    menu.classList.toggle('active');
  }
  function openModal(e) {
    e.preventDefault();
    modal.classList.toggle('active');
  }
  if (btn) btn.addEventListener('click', openMenu);
  if (certification) certification.addEventListener('click', openModal);
  if (closeSpan) closeSpan.addEventListener('click', openModal);
};

export default menuMobile;
