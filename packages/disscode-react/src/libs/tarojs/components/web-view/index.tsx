import React from 'react'
import omit from 'omit.js'
import './style/index.css'

class WebView extends React.Component<any> {
  constructor () {
    super(...arguments)
    this.onLoad = this.onLoad.bind(this)
    this.onError = this.onError.bind(this)
  }

  onLoad (e) {
    const { onLoad } = this.props
    onLoad && onLoad(e)
  }

  onError (e) {
    const { onError } = this.props
    onError && onError(e)
  }

  render () {
    const {
      src,
      ...other
    } = this.props
    return (
      <iframe className='taro-webview' onLoad={this.onLoad} onError={this.onError} {...omit(this.props, ['src', 'className'])} src={src} {...other} />
    )
  }
}

export default WebView