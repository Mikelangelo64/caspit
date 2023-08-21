import useObserver from '../config/useObserver';
import createAnimation from './createAnimation';
import { TAnimation } from './types';

const createObserver = (item: HTMLElement, container: HTMLElement) => {
  const delay = item.dataset.delay ? +item.dataset.delay : 0;

  if (Number.isNaN(delay)) {
    return;
  }

  const duration = item.dataset.duration ? +item.dataset.duration : 1000;

  if (Number.isNaN(duration)) {
    return;
  }

  const animation = item.dataset.animation
    ? (item.dataset.animation as TAnimation)
    : 'fadeIn';

  useObserver({
    target: container,
    callbackIn: () => {
      setTimeout(() => {
        createAnimation({ itemProp: item, duration, animation });
      }, delay);
    },
    isCallOnce: true
  });
};

export default createObserver;
