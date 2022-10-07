import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../header'

describe('Header', () => {
  it('should render header component', () => {
    const tree = renderer.create(<Header>Header</Header>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
