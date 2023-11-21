const modalButton = document.querySelector('.footer__text');
const modal = document.querySelector('.modal');
const modal__inner = document.querySelector('.modal__inner');
const body = document.querySelector('body');
const closeButton = document.querySelector('.closeButton');

const closeModal = () => {
    modal__inner.classList.remove('modal__content--open');
    modal.classList.remove('modal--open');
    body.style.overflow = 'unset';
}

modalButton.onclick = () => {
    modal__inner.classList.add('modal__content--open');
    modal.classList.add('modal--open');
    body.style.overflow = 'hidden';
}

modal.onclick = (e) => {
    if (e.target !== modal) return;
    closeModal();
}

modal__inner.onclick = (e) => {
    if (e.target !== modal__inner) return;
    closeModal();
}

closeButton.onclick = () => {
    closeModal();
}
