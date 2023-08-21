export type TAnimation =
  | 'fadeInUp'
  | 'fadeIn'
  | 'fadeInLeft'
  | 'fadeInRightBottom'
  | 'fadeInRightUp'
  | 'no-animate';

export interface ICreateAniamtionProps {
  itemProp: HTMLElement;
  duration: number;
  animation: TAnimation;
}
