import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

beforeEach(() => {
  jest.spyOn(console, 'error')
  console.error.mockImplementation(() => null)
})
