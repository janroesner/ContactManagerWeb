import React from 'react'
import ContactForm from '../'

test('returns -1 when any type but number of input is given',() => {
  const instance = new ContactForm()

  expect(instance.toBeUnitTested('')).toBe(-1)
  expect(instance.toBeUnitTested({})).toBe(-1)
  expect(instance.toBeUnitTested(() => {})).toBe(-1)
  expect(instance.toBeUnitTested([])).toBe(-1)
})

test('returns the given number + 1', () => {
  const instance = new ContactForm()

  expect(instance.toBeUnitTested(1)).toBe(2)
  expect(instance.toBeUnitTested(10)).toBe(11)
  expect(instance.toBeUnitTested(-3)).toBe(-2)
})
