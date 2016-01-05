import { assert } from 'chai'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import I from '../src/'

describe('react-i', () => {
  it('should render icon', () => {
    const html = renderToStaticMarkup(<I icon="up" />)
    assert.equal('<span icon="up" size="24"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style="fill:currentcolor;vertical-align:middle;display:inline-block;pointer-events:none;-webkit-user-select:none;width:24px;height:24px;"><g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"></path></g></svg></span>', html)
  })
})