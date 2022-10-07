import React from 'react'
import renderer from 'react-test-renderer'
import Table from '../table'

describe('Table', () => {
  it('should render table component', () => {
    const tree = renderer
      .create(
        <Table>
          <thead>
            <th>Test header</th>
            <th>Test header</th>
            <th>Test header</th>
          </thead>
          <tbody>
            <tr>
              <td>Test description</td>
              <td>Test description</td>
              <td>Test description</td>
            </tr>
            <tr>
              <td>Test description</td>
              <td>Test description</td>
              <td>Test description</td>
            </tr>
          </tbody>
        </Table>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
