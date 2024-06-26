import Taro from '@tarojs/taro';
import React from 'react';
import classnames from 'classnames'

import './style/index.scss'
import touchable from '../../utils/touchable'

/**
 * Canvas组件参数
 * @typedef CanvasProps
 * @property {String} [canvasId=canvas] 组件的唯一标识符
 * @property {Boolean} [disableScroll=false] 当在 canvas 中移动时且有绑定手势事件时，禁止屏幕滚动以及下拉刷新
 * @property {EventHandle} onTouchstart 手指触摸动作开始
 * @property {EventHandle} onTouchmove 手指触摸后移动
 * @property {EventHandle} onTouchend 手指触摸动作结束
 * @property {EventHandle} onTouchcancel 手指触摸动作被打断，如来电提醒，弹窗
 * @property {EventHandle} onLongtap 手指长按 500ms 之后触发，触发了长按事件后进行移动不会触发屏幕的滚动
 * @property {EventHandle} onError 当发生错误时触发 error 事件，detail = {errMsg: 'something wrong'}
 */

@touchable()
class Canvas extends React.PureComponent<any> {
  /** @type {CanvasProps} */
  static defaultProps = {
    canvasId: '',
    disableScroll: false,
    onError: null
  }

  width = 300
  height = 150
  getWrapRef = ref => {
    if (ref) this.wrapDom = ref
  }
  getCanvasRef = ref => {
    if (ref) this.canvasRef = ref
  }
  setSize = (width, height) => {
    const w = this.wrapDom.getAttribute('width') || width
    const h = this.wrapDom.getAttribute('height') || height
    if (this.width !== w) {
      this.canvasRef.setAttribute('width', w)
      this.width = w
    }
    if (this.height !== h) {
      this.canvasRef.setAttribute('height', h)
      this.height = h
    }
  }
  componentWillUpdate () {
    this.canvasRef.setAttribute('canvas-block', false)
  }
  componentDidMount () {
    if (!this.wrapDom) return
    const { width, height } = this.wrapDom.getBoundingClientRect()
    this.setSize(width, height)
  }
  componentDidUpdate () {
    const { width, height } = this.wrapDom.getBoundingClientRect()
    this.setSize(width, height)
  }
  componentDidCatch (e) {
    const onError = this.props.onError
    onError && onError({
      errMsg: e.message
    })
  }
  render () {
    const { id, canvasId, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel, className, width, height, style, ...restProps } = this.props
    const wrapProps = {
      className: classnames('taro-canvas', className),
      ref: this.getWrapRef,
      style: {
        width: width ? `${width}px` : null,
        height: height ? `${height}px` : null,
        ...style,
      },
      ...restProps
    }
    const canvasProps = {
      id,
      canvasId,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      onTouchCancel,
      width: this.width,
      height: this.height,
      ref: this.getCanvasRef
    }
    return (
      <div {...wrapProps}>
        <canvas {...canvasProps} />
      </div>
    )
  }
}

export default Canvas