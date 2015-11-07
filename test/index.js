const {assert} = require('chai')
const React = require('react')
const I = require('../src/')

function render(component) {
  return React.renderToStaticMarkup(component)
}

describe('react-i', () => {
  it('should render icon', () => {
    const html = render(<I icon="up" />)
    assert.equal('<span><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" style="fill:currentcolor;vertical-align:middle;display:inline-block;pointer-events:none;-webkit-user-select:none;width:24px;height:24px;"><g><path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z"></path></g></svg></span>', html)
  })
})