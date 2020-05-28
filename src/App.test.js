import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'
import Sell from './Sell/Sell'


test('App should render', () => {

   render(<App />)

  const buyMenu = screen.getByText('Sell')
  const sellMenu = screen.getByText('Sell')
  const morgageMenu = screen.getByText('Morgages')
  const favoritesMenu = screen.getByText('Favorites')
  const loading = screen.getByText('Loading...')
  expect(buyMenu).toBeInTheDocument()
  expect(sellMenu).toBeInTheDocument()
  expect(morgageMenu).toBeInTheDocument()
  expect(favoritesMenu).toBeInTheDocument()
  expect(loading).toBeInTheDocument()

})

