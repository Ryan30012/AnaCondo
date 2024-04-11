import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../../app/SignIn/form'; // Adjust the path to your component
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
  useSession: () => ({
    data: { user: { email: 'test@example.com' } },
    update: jest.fn() // Mock the `update` function
  }),

}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    refresh: jest.fn(),
  }),
}));

describe('SignIn Form', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('submits the form with email and password', async () => {
    const user = userEvent.setup();
    render(<Form />);

    // Mock implementation if needed, e.g., for signIn
    (signIn as jest.Mock).mockResolvedValue({ error: null });

    // Fill in the form fields
    await user.type(screen.getByPlaceholderText('Email'), 'user@example.com');
    await user.type(screen.getByPlaceholderText('Password'), 'password');

    // Submit the form
    fireEvent.submit(screen.getByRole('button', { name: 'Login' }));

    // Assert signIn was called correctly
    expect(signIn).toHaveBeenCalledWith("credentials", {
      email: 'user@example.com',
      password: 'password',
      redirect: false,
    });
  });
});
