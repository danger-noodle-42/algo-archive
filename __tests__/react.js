import React from "react";
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App';
import LoginSignup from '../client/LoginSignup';

describe('Unit testing react components',() => {
  describe('Tags', () => {
    let component;
    beforeAll(() => {
      // render the home page component that contains the tags
      component = render(<App />)
    })
    test('Renders the tags container', () => {

      // expect that the tags container is present in the document
      // search screen for header that shows tags 
      expect(component.getByText('Tags')).toBeInTheDocument();
    })
    // check if tags contains a list of all the tags

    // check if the tag can be properly selected?
  })
  describe('Login Page', () => {
    let component
    beforeAll(() => {
      // render login page
      component = render(<LoginSignup />)
    })
    test('Renders login page', () => {
      // expect that the login page is rendered
      // search component and find the login header
      expect(component.getByText('Log In')).toBeInTheDocument();
    })
    // check if button is present

    // check if button invokes a function?
  })
  describe('Signup Page', () => {
    let component
    beforeAll(() => {
      // render login page
      component = render(<LoginSignup />)
    })
    test('Renders signup page', () => {
      // expect that the login page is rendered
      // search component and find the login header
      expect(component.getByText('Sign up')).toBeInTheDocument();
    })
    // check if button is present

    // check if button invokes a function?
  })
})
