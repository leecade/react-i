import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import I from 'react-i'

const MyIcon = () => <g>
  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path>
</g>

const Spinner = () => <g>
  <path opacity=".25" d="M12,0 C5.372583,-4.05812251e-16 8.11624501e-16,5.372583 0,12 C-8.11624501e-16,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C24,5.372583 18.627417,4.05812251e-16 12,0 M12,3 C16.9705627,3.00000007 20.9999999,7.0294373 20.9999999,12 C20.9999999,16.9705627 16.9705627,20.9999999 12,21 C7.0294373,20.9999999 3.00000013,16.9705627 3.00000013,12 C3.00000013,7.0294373 7.0294373,3.00000007 12,3"/>
  <path d="M12,0 C18.627417,4.05812251e-16 24,5.372583 24,12 L21,12 C21,7.02943725 16.9705627,3 12,3 L12,0 Z" dangerouslySetInnerHTML={{ __html: '<animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />' }}>
  </path>
</g>

export default class App extends Component {
  render () {
    return <div style={{color:'#38B8C1'}}>
      <I className='xxx' icon='up'><span>icon-left</span></I><br/>
      <I dir='right' icon='down'><span>icon-right</span></I><br/>

      <span style={{color: '#4B5E6E'}}><I icon='up'>Inherit Color</I></span><br/>
      <span style={{color: '#4B5E6E'}}><I style={{color: '#f00'}} icon='up'></I><span>Custom Color</span></span><br/>

      <I icon={MyIcon}>Custom Icon</I><br/>
      <I icon={MyIcon} style={{WebkitFilter: 'drop-shadow(3px 3px 2px rgba(0,0,0,.4))'}}>Support Shadow</I><br/>
      <I icon={MyIcon} size='40'>big icon</I><br/>
      <I icon={MyIcon} size='10em'>very big icon</I><br/>
      <I icon={MyIcon} size='12'>small icon</I><br/>

      <button style={{background: '#38B8C1', color: '#fff', border: 'none', borderRadius: '2px', 'paddingLeft': '5px', 'outline': 'none'}}><I icon='up' dir='right'>use in button</I></button><br/><br/>
      
      <div style={{width: '250px', height: '100px', background: 'rgba(0,0,0,.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px', color: '#bbb'}}>
        <I icon={Spinner} size='24' fill='#38B8C1' />&nbsp;&nbsp;Loading...
      </div>
    </div>
  }
}

render(
  <App />,
  document.getElementById('root')
)