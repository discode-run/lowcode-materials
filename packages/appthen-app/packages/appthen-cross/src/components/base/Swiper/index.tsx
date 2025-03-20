import React from 'react';
import { Swiper as TaroSwiper } from '@tarojs/components';
import { SwiperProps } from './types';

const Swiper: React.FC<SwiperProps> = ({
  previousMargin,
  nextMargin,
  children,
  ...props
}) => {
  // 将 number 类型转换为 px 单位
  const convertToPx = (value?: number) => {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  };

  return (
    <TaroSwiper
      {...props}
      previousMargin={convertToPx(previousMargin)}
      nextMargin={convertToPx(nextMargin)}
    >
      {children}
    </TaroSwiper>
  );
};

export default Swiper; 