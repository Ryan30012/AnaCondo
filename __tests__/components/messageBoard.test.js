import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Forum from '../../app/MessageBoard/form'; // Adjust the import path to your Forum component

jest.mock('next-auth/react', () => ({
  useSession: () => ({
    data: {
      user: { email: 'test@example.com' },
    },
    status: 'authenticated',
  }),
}));

describe('Testing the message board page', () => {
    beforeEach(() => {
        fetch.resetMocks();
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('posts a message and fetches messages', async () => {
        const mockMessages = [
            { id: 1, email: 'john@example.com', date: '2023-01-01', message: 'Hello World' },
            // Add more mock messages as needed
        ];

        // Mock the GET request for fetching messages
        fetch.mockResponseOnce(JSON.stringify({ data: { rows: mockMessages } }));

        // Mock the POST request for posting a new message
        fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });

        render(<Forum />);

        // Simulate user typing a message
        const textarea = screen.getByPlaceholderText('Type your message here...');
        userEvent.type(textarea, 'New message');

        // Simulate form submission
        const submitButton = screen.getByRole('button', { name: 'Post Message' });
        userEvent.click(submitButton);

        // Wait for the fetch to be called and the message list to update
        await waitFor(() => {
            expect(fetch).toHaveBeenCalledTimes(1); 
            
            expect(textarea).toHaveValue('');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                expect.stringContaining('Fetching complete. Data:'),
                expect.arrayContaining([
                    expect.objectContaining({
                        id: 1,
                        email: 'john@example.com',
                        date: '2023-01-01',
                        message: 'Hello World',
                    }),
                ])
            );
        });
    });
});