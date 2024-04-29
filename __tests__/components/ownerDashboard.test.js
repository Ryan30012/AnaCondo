import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../../app/Owner/Dashboard/page'; // Adjust the import path to where your Dashboard component is located.

describe('Dashboard Component', () => {
  it('renders the dashboard with buttons and images', () => {
    render(<Dashboard />);

    // Check for a specific button by text
    const myProfileButton = screen.getByRole('button', { name: 'My Profile' });
    expect(myProfileButton).toBeInTheDocument();

    // Since Image components are replaced with simple img elements in Jest,
    // you can check for the presence of an image by its alt text.
    const buildingImages = screen.getAllByAltText('building image');
    expect(buildingImages).toHaveLength(2);

    // Add more assertions as needed for other buttons or elements
  });
});