import vevet from '../config/vevet';
import createObserver from './createObserver';

const showAnimationInit = () => {
  if (vevet.isMobile) {
    return;
  }

  const containerArray = document.querySelectorAll(
    '.show-animation'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((container) => {
    const itemsArray = container.querySelectorAll(
      '.show-animation__item'
    ) as NodeListOf<HTMLElement>;

    if (itemsArray.length === 0) {
      return;
    }

    itemsArray.forEach((item) => {
      createObserver(item, container);
    });
  });
};

export default showAnimationInit;
