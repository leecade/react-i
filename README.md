# react-i

[![npm version](http://img.shields.io/npm/v/react-i.svg?style=flat-square)](https://npmjs.org/package/react-i "View this project on npm")
[![npm version](http://img.shields.io/npm/dm/react-i.svg?style=flat-square)](https://npmjs.org/package/react-i "View this project on npm")
[![Issue Stats](http://issuestats.com/github/leecade/react-i/badge/pr?style=flat-square)](https://github.com/leecade/react-i/pulls?q=is%3Apr+is%3Aclosed)
[![Issue Stats](http://issuestats.com/github/leecade/react-i/badge/issue?style=flat-square)](https://github.com/leecade/react-i/issues?q=is%3Aissue+is%3Aclosed)
[![Circle CI](https://circleci.com/gh/leecade/react-i.svg)](https://circleci.com/gh/leecade/react-i)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

A tiny (1 KB gzipped) `<Icon />` Component for React(-like).

> SVG is the best way for cross platform scalable vector graphics, also we can use `react-i` in react-native or react-android project.

[DEMO](https://view.gitlab.pro/react/react-i)

![image](https://gitlab.pro/react/react-i/uploads/6ea1589a3fbbe2d5942b9813f59b10f0/image.png)

### Compatibility

- IE8+
- React 0.14+

### Usage

```sh
npm i react-i --save
```

```jsx
import I from 'react-i'

<I icon='up' />
<I icon='up'>icon</I>
<I icon='up' fill='#f00' className='i-up'>icon</I>
```

#### Props

```jsx
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

  // Use `fill` and `stroke` is a convenient way, auto merge to `style`
  fill: PropTypes.string,
  stroke: PropTypes.string,
  dir: PropTypes.oneOf([
    'left',
    'right'
  ])
}
```

#### How to create a icon

Consider for reduce size in the real world, there provides a simple way to create your iconset.

- First of all, open the `tools/simple.sketch` file in Sketch

    ![image](https://gitlab.pro/haoyayi/clinic-profile/uploads/63cff495b500a109bce9e0ba2efaa749/image.png)

    This is a template file, you may draw your vector icon by yourself, then export as `svg` type (If you want complete the step in AI or PS, notice that keep the canvas size 24x24)

- Open the svg file in editor, we will get the code like:

    ```xml
    <?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
        <!-- Generator: Sketch 3.4 (15575) - http://www.bohemiancoding.com/sketch -->
        <title>24x24</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
            <g id="24x24" sketch:type="MSArtboardGroup" fill="#000000">
                <path d="M11.99,2 C6.47,2 2,6.48 2,12 C2,17.52 6.47,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 11.99,2 L11.99,2 Z M16.23,18 L12,15.45 L7.77,18 L8.89,13.19 L5.16,9.96 L10.08,9.54 L12,5 L13.92,9.53 L18.84,9.95 L15.11,13.18 L16.23,18 L16.23,18 Z" id="Shape" sketch:type="MSShapeGroup"></path>
            </g>
        </g>
    </svg>
    ```

    Don't case the redundant code, we have a tool (in `./tools` folder) to convert it.

    run `./svg-icon origin.svg`, output:

    ```js
    export const Origin = () => <g><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></g>
    ```

    Great, we hava a component named `Origin`.

- Use it in project

    Convert all svg file to a js file.

    ```sh
    ./svg-icon *.svg >> icons.js
    ```

    Then, we can use it with `react-i`.

    ```
    import React, { Component } from 'react'
    import ReactDOM, { render } from 'react-dom'
    import I from 'react-i'
    import {
      Origin
    } from './icons'

    const App = () => <div style={{color:'#38B8C1'}}>
      <I icon={Origin} />
    </div>

    render(
      <App />,
      document.getElementById('root')
    )
    ```

    A effective easy and cheap way to organizing and use your icons, right?

#### More Case

```jsx
<div style={{color:'#38B8C1'}}>
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
```

Animation Svg example:

> Notice that, React(v0.14.x) not support `animateTransform` yet, there is a temporary solution with `dangerouslySetInnerHTML`

```jsx
const Spinner = () => <g>
  <path opacity=".25" d="M12,0 C5.372583,-4.05812251e-16 8.11624501e-16,5.372583 0,12 C-8.11624501e-16,18.627417 5.372583,24 12,24 C18.627417,24 24,18.627417 24,12 C24,5.372583 18.627417,4.05812251e-16 12,0 M12,3 C16.9705627,3.00000007 20.9999999,7.0294373 20.9999999,12 C20.9999999,16.9705627 16.9705627,20.9999999 12,21 C7.0294373,20.9999999 3.00000013,16.9705627 3.00000013,12 C3.00000013,7.0294373 7.0294373,3.00000007 12,3"/>
  <path d="M12,0 C18.627417,4.05812251e-16 24,5.372583 24,12 L21,12 C21,7.02943725 16.9705627,3 12,3 L12,0 Z" dangerouslySetInnerHTML={{ __html: '<animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />' }}>
  </path>
</g>
```

Try your self:

```sh
git clone https://github.com/leecade/react-i.git
npm i

// edit demo/index.js

npm run dev

// open demo/index.html
```

## Need more open-source iconset

- [material-design-icons](https://elements.polymer-project.org/elements/iron-icons?view=demo:demo/index.html&active=iron-icons)
- [Twig](https://github.com/leecade/twig/tree/master/svg/24)

## Refs

- [Tips for Creating and Exporting Better SVGs for the Web](http://sarasoueidan.com/blog/svg-tips-for-designers)
- [SVG `symbol` a Good Choice for Icons](https://css-tricks.com/svg-symbol-good-choice-icons/)
- [An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/)
