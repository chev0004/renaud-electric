declare module '@splidejs/react-splide' {
  import type { ComponentType, ReactNode } from 'react';
  import type { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    className?: string;
    children?: ReactNode;
    tag?: keyof JSX.IntrinsicElements;
    hasTrack?: boolean;
    hasSliderWrapper?: boolean;
  }

  export interface SplideSlideProps {
    className?: string;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}
