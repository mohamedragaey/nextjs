import React from 'react'
import {withRouter} from 'next/router'
import {log} from './helpers'

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.pathname !== prevProps.pathname) {
      window.scrollTo(0, 0)
      this.onRouteChanged()
    }
  }

  onRouteChanged () {
    log('ROUTE CHANGED')
  }

  render () {
    return null
  }
}

export default withRouter(ScrollToTop)
