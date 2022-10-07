import React from 'react'
import renderer from 'react-test-renderer'
import Card from '../card'

describe('Card', () => {
  it('should render card component', () => {
    const tree = renderer.create(<Card>Card</Card>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
