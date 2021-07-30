import React from 'react'
import { screen } from '@testing-library/react'

import Test from './Test'
import { renderMUI } from '../utils/renderMUI'

describe('Home', () => {
  it('should render Home', async () => {
    renderMUI(<Test />)

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
