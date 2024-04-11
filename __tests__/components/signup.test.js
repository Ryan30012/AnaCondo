import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../../app/SignUp/form'; // Adjust the import path
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}));

describe('Registration Form', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
  
    it('submits the form and navigates on success', async () => {
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
      render(<Form />);
  
      const user = userEvent.setup();
  
      // Fill in the form
      await user.type(screen.getByPlaceholderText('First Name'), 'John');
      await user.type(screen.getByPlaceholderText('Last Name'), 'Doe');
      await user.type(screen.getByPlaceholderText('Username'), 'testys123');
      await user.type(screen.getByPlaceholderText('DD/MM/YYYY'), '5 ave testy');
      await user.type(screen.getByPlaceholderText('###-###-####'), '333-666-9999');
      await user.type(screen.getByPlaceholderText('Email'), 'testy@gmaily.po');
      await user.type(screen.getByPlaceholderText('Password'), 'miltesty');
      await user.type(screen.getByPlaceholderText('Confirm Password'), 'miltesty');
      await user.type(screen.getByPlaceholderText('Password'), 'miltesty');
      const select = screen.getByRole('combobox');
      await user.selectOptions(select, 'PUBLIC_USER');
      // Continue for other fields...
  
      // Mock successful response
      fetch.mockResponseOnce(JSON.stringify({ success: true }), { status: 200 });
  
      // Submit the form
      await user.click(screen.getByRole('button', { name: 'Sign Up' }));
  
      // Wait for the fetch call to finish
      await waitFor(() => expect(fetch).toHaveBeenCalledWith(
        "/api/auth/register",
        expect.objectContaining({
          method: "POST",
          body: expect.any(Array), // You could make this more specific
        })
      ));
  
      // Check for navigation after successful registration
      const router = useRouter();
      await waitFor(() => expect(router.push).toHaveBeenCalledWith('/SignIn'));
    });
  
    // You could add more tests here for handling fetch errors, form validation, etc.
  });
  