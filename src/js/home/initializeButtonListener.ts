import updateCount from './updateCount';

const initializeButtonListener = () => {
  let count = 0;

  const button = document.querySelector('[data-increment]');
  button?.addEventListener('click', () => {
    count += 1;
    updateCount(count);
  });
};

export default initializeButtonListener;
