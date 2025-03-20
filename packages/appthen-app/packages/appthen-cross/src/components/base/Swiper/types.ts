import { SwiperProps as TaroSwiperProps } from '@tarojs/components';

export interface SwiperProps extends Omit<TaroSwiperProps, 'previousMargin' | 'nextMargin'> {
  /**
   * 前边距，接受数字（单位为px）
   */
  previousMargin?: number;
  /**
   * 后边距，接受数字（单位为px）
   */
  nextMargin?: number;
} 