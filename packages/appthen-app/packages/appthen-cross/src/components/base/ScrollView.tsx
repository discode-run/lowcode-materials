import React from 'react';
import { ScrollView, View } from '@tarojs/components';
import { CommonEventFunction } from '@tarojs/components/types/common';
import classNames from 'classnames';
import omit from 'omit.js';
import debounce from '../../utils/loadsh/debounce';

export interface ScrollViewProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  native?: boolean;
  showScrollbar?: boolean;
  scrollX?: boolean;
  scrollY?: boolean;
  bounces?: boolean;
  upperThreshold?: number;
  lowerThreshold?: number;
  scrollTop?: number;
  scrollLeft?: number;
  scrollWithAnimation?: boolean;
  enableBackToTop?: boolean;
  onScrollToUpper?: CommonEventFunction;
  onScrollToLower?: CommonEventFunction;
  onRefresherRefresh?: (completePullDown: () => void) => void;
  onScroll?: CommonEventFunction;
}

interface ScrollViewState {
  scrollTop?: number;
  scrollLeft?: number;
  refresherTriggered: boolean;
  isScrolling: boolean;
}

export class HocScrollView extends React.Component<ScrollViewProps, ScrollViewState> {
  state: ScrollViewState = {
    scrollTop: this.props.scrollTop,
    scrollLeft: this.props.scrollLeft,
    refresherTriggered: false,
    isScrolling: false
  };

  scrollRef = React.createRef<any>();
  lastScrollTop?: number;
  lastScrollLeft?: number;

  // 使用防抖来更新滚动位置
  updateScrollPosition = debounce((scrollTop: number, scrollLeft: number) => {
    this.lastScrollTop = scrollTop;
    this.lastScrollLeft = scrollLeft;
    this.setState({ 
      scrollTop, 
      scrollLeft,
      isScrolling: true 
    });
  }, 150);

  scrollTo = ({ x, y }: { x?: number; y?: number }) => {
    // 更新最后的滚动位置
    this.lastScrollLeft = typeof x === 'number' ? x : this.state.scrollLeft;
    this.lastScrollTop = typeof y === 'number' ? y : this.state.scrollTop;
    
    this.setState(prevState => ({
      scrollLeft: typeof x === 'number' ? x : prevState.scrollLeft,
      scrollTop: typeof y === 'number' ? y : prevState.scrollTop,
      isScrolling: false // 这里设为 false 因为是主动调用的滚动
    }));
  };

  // 处理滚动事件
  onScroll = (e: any) => {
    const { scrollLeft, scrollTop } = e.detail;
    this.updateScrollPosition(scrollTop, scrollLeft);
    this.props.onScroll?.(e);
  };

  onRefresherRefresh = () => {
    this.setState({ refresherTriggered: true });
    this.props.onRefresherRefresh?.(this.completePullDown);
  };

  completePullDown = () => {
    this.setState({ refresherTriggered: false });
  };

  shouldComponentUpdate(nextProps: ScrollViewProps, nextState: ScrollViewState) {
    // 如果是由用户滚动引起的更新，且只有滚动位置发生变化
    if (nextState.isScrolling && 
        this.lastScrollTop === nextState.scrollTop && 
        this.lastScrollLeft === nextState.scrollLeft &&
        nextProps.children === this.props.children) {
      // 重置滚动状态
      this.setState({ isScrolling: false });
      return false;
    }

    // 其他情况都允许更新
    return true;
  }

  componentDidUpdate(prevProps: ScrollViewProps) {
    // 处理 props 中的 scrollTop/scrollLeft 变化
    if (this.props.scrollTop !== prevProps.scrollTop || this.props.scrollLeft !== prevProps.scrollLeft) {
      this.scrollTo({
        x: this.props.scrollLeft,
        y: this.props.scrollTop
      });
    }
  }

  componentWillUnmount() {
    // 清理防抖
    this.updateScrollPosition.cancel();
  }

  render() {
    const {
      className = '',
      style = {},
      native,
      showScrollbar,
      scrollWithAnimation,
      children,
      scrollY,
      scrollX,
      onRefresherRefresh,
      ...other
    } = this.props;

    // 使用记录的最后滚动位置或状态中的位置
    const scrollTop = this.lastScrollTop ?? this.state.scrollTop;
    const scrollLeft = this.lastScrollLeft ?? this.state.scrollLeft;
    const { refresherTriggered } = this.state;

    const scrollView = (
      <ScrollView
        scrollWithAnimation={scrollWithAnimation}
        scrollTop={scrollTop}
        scrollLeft={scrollLeft}
        onScroll={this.onScroll}
        ref={this.scrollRef}
        scrollX={scrollX}
        scrollY={scrollY || !scrollX}
        style={style}
        enhanced={typeof showScrollbar === 'boolean'}
        className={classNames({ 'cs-scroll-view__scroll': !native }, className)}
        showScrollbar={showScrollbar}
        refresherEnabled={!!onRefresherRefresh}
        refresherTriggered={refresherTriggered}
        onRefresherRefresh={this.onRefresherRefresh}
        {...omit(other as any, ['onScroll', '__event'])}
      >
        {children}
      </ScrollView>
    );
    return native ? scrollView : <View className={`cs-scroll-view M-flex-item`}>{scrollView}</View>;
  }
}

export default React.memo(HocScrollView);