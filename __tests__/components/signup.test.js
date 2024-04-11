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
          body: expect.any(String), // You could make this more specific
        })
      ));
  
      // Check for navigation after successful registration
      const router = useRouter();
      await waitFor(() => expect(router.push).toHaveBeenCalledWith('/SignIn'));
    });
  
    // You could add more tests here for handling fetch errors, form validation, etc.
  });
  