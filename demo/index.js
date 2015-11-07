import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import I from 'react-i'

const MyIcon = () => <g>
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
</g>

export default class App extends Component {
  render () {
    return <div style={{color:'#38B8C1'}}>
      <I icon='up'><span>icon-left</span></I><br/>
      <I dir='right' icon='down'><span>icon-right</span></I><br/>

      <span style={{color: '#4B5E6E'}}><I icon='up'>Inherit Color</I></span><br/>
      <span style={{color: '#4B5E6E'}}><I style={{color: '#f00'}} icon='up'></I><span>Custom Color</span></span><br/>

      <I icon={MyIcon}>Custom Icon</I><br/>
      <I icon={MyIcon} style={{WebkitFilter: 'drop-shadow(3px 3px 2px rgba(0,0,0,.4))'}}>Support Shadow</I><br/>
      <I icon={MyIcon} size='40'>big icon</I><br/>
      <I icon={MyIcon} size='10em'>very big icon</I><br/>
      <I icon={MyIcon} size='12'>small icon</I><br/>

      <button style={{background: '#38B8C1', color: '#fff', border: 'none', borderRadius: '2px', 'paddingLeft': '5px', 'outline': 'none'}}><I icon='up' dir='right'>use in button</I></button>
    </div>
  }
}

render(
  <App />,
  document.getElementById('root')
)