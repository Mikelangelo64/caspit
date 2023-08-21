import { Timeline } from 'vevet';
import { ICreateAniamtionProps } from './types';

const createAnimation: (props: ICreateAniamtionProps) => void = ({
  itemProp,
  duration,
  animation
}) => {
  const item = itemProp;

  const timeline = new Timeline({
    duration,
    destroyOnEnd: true
  });

  timeline.addCallback('progress', ({ easing }) => {
    switch (animation) {
      case 'fadeIn':
        item.style.opacity = `${easing}`;
        break;

      case 'fadeInUp':
        item.style.transform = `translate(0, ${(1 - easing) * 50}px)`;
        item.style.opacity = `${easing}`;
        break;

      case 'fadeInLeft':
        item.style.transform = `translate(${(easing - 1) * 20}px, 0)`;
        item.style.opacity = `${easing}`;
        break;

      case 'fadeInRightBottom':
        item.style.transform = `translate(
          ${(1 - easing) * 20}px, 
          ${(1 - easing) * 20}px)`;

        item.style.opacity = `${easing}`;
        break;

      case 'fadeInRightUp':
        item.style.transform = `translate(
          ${(1 - easing) * 20}px, 
          ${(easing - 1) * 30}px)`;

        item.style.opacity = `${easing}`;
        break;

      default:
        item.style.opacity = '';
    }
  });

  timeline.addCallback('end', () => {
    item.classList.add('showed');
  });

  timeline.addCallback('destroy', () => {
    item.style.opacity = '';
    item.style.transform = '';
  });

  timeline.play();
};

export default createAnimation;
