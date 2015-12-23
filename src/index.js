import React, { Component, PropTypes } from 'react'
import * as icons from './icons'

const style = {
  fill: 'currentcolor',
  verticalAlign: 'middle',
  display: 'inline-block',
  pointerEvents: 'none',
  WebkitUserSelect: 'none'
}

export default class I extends Component {

  constructor (props) {
    super(props)
  }

  static propTypes = {
    icon: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]).isRequired,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object,
    fill: PropTypes.string,
    stroke: PropTypes.string,
    dir: PropTypes.oneOf([
      'left',
      'right'
    ])
  }

  static defaultProps = {
    size: 24
  }

  render () {
    const Icon = icons[this.props.icon] || this.props.icon || ''
    if (this.props.fill) style.fill = this.props.fill
    if (this.props.stroke) style.stroke = this.props.stroke
    return <span style={this.props.style}>
      {this.props.dir === 'right' ? this.props.children : ''}
      <svg
        viewBox='0 0 24 24'
        preserveAspectRatio='xMidYMid meet'
        fit
        style={Object.assign({}, style, {
          width: this.props.size,
          height: this.props.size
        })}>
        <Icon />
      </svg>
      {this.props.dir === 'right' ? '' : this.props.children}
    </span>
  }
}