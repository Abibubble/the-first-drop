import Image from 'next/image'
import Layout from '@/components/layout'
import Button from '@/components/button'
import Card from '@/components/card'
import Table from '@/components/table'

export default function Home() {
  return (
    <>
      <Layout>
        <h1>Welcome to The First Drop!</h1>

        <p>Test homepage</p>
        <Button>Test button</Button>
        <Card>
          <p>Test card</p>
        </Card>
        <Table>
          <thead>
            <tr>
              <th>Test header</th>
              <th>Test header</th>
              <th>Test header</th>
            </tr>
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
      </Layout>
    </>
  )
}
