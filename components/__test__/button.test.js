import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../button'

describe('Button', () => {
  it('should render button component', () => {
    const tree = renderer.create(<Button>Button</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
