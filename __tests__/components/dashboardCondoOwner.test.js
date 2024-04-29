import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DashboardCondoOwner } from '../../app/DashboardCondoOwner/form';
import fetchMock from 'jest-fetch-mock';

describe('DashboardCondoOwner', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches properties and displays them', async () => {
    const fakeProperties = [
        { column1: 'Condo A', column2: '123 Main St', column3: '$1000', column4: '5', column5: 'img-url-a' },
        { column1: 'Condo B', column2: '456 Elm St', column3: '$2000', column4: '10', column5: 'img-url-b' },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({ data: fakeProperties }));

    render(<DashboardCondoOwner />);

    // Use waitFor to wait for the expectation to pass
    await waitFor(() => {
        expect(screen.getByText('Condo A')).toBeInTheDocument();
        expect(screen.getByText('123 Main St')).toBeInTheDocument();
    }, { timeout: 5000 }); // Increase timeout if necessary
  });

  it('logs an error to the console on fetch failure', async () => {
    // Spy on console.error to intercept and track calls
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  
    // Simulate a network failure
    fetchMock.mockRejectOnce(new Error('Failed to fetch'));
  
    render(<DashboardCondoOwner />);
  
    // Wait for the component to finish any asynchronous operations
    await waitFor(() => expect(consoleSpy).toHaveBeenCalled());
  
    // Check if console.error was called with the expected message or error
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Error fetching data:'),
      expect.objectContaining({ message: 'Failed to fetch' }) // Matching the error object
    );
    // Clean up: restore the original console.error to prevent affecting other tests
    consoleSpy.mockRestore();
  });
  
});
