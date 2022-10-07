import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../layout'

describe('Layout', () => {
  it('should render layout component', () => {
    const tree = renderer.create(<Layout>Layout</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
