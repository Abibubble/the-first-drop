import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../components/button'

describe('Button', () => {
  it('should render', () => {
    const tree = renderer.create(<Button>Button</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
