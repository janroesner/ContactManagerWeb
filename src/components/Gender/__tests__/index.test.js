import React from 'react';
import Gender from '../';
import renderer from 'react-test-renderer';

test('renders male emoji for males', () => {

  const component = renderer.create(
    <Gender gender='m' />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders female emoji for females', () => {

  const component = renderer.create(
    <Gender gender='f' />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

test('render female emoji as default, when invalid gender is given', () => {

  const component = renderer.create(
    <Gender gender='a' />
  )
  let tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
