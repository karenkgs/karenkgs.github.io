import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

const { getByText } = render(<App />)

test('renders menu options', () => {
  ["About",
    "Projects",
    "Talks",
    "Contact"
  ].forEach(assertElementExistsByText)
})

function assertElementExistsByText(elementText) {
  expect(getByText(elementText)).toBeInTheDocument()
}
