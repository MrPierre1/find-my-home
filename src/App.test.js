import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'

test('App should render', () => {

   render(<App />)

  const buyMenu = screen.getByText('Buy')
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

test('App should render', () => {

  render(<App />)

 screen.getByText('Buy')
 screen.getByText('Sell')
 screen.getByText('Morgages')
 screen.getByText('Favorites')
 screen.getByText('Loading...')
})