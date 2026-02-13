import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';

vi.mock('react-confetti', () => ({
  default: () => <div data-testid="confetti" />
}));

describe('Hero Component', () => {
  it('renders correctly with expected text', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.getByText(/IT-ekspertise/i)).toBeInTheDocument();
    expect(screen.getAllByText(/500kr\/t/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Ingen mellomledd/i)).toBeInTheDocument();
    expect(screen.getByText(/Personlig IT-rådgivning til en rimelig pris/i)).toBeInTheDocument();
  });

  it('clicking the image button triggers confetti', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(screen.queryByTestId('confetti')).not.toBeInTheDocument();

    const confettiButton = screen.getByLabelText(/Vis konfetti effekt/i);
    fireEvent.click(confettiButton);

    expect(screen.getByTestId('confetti')).toBeInTheDocument();
  });
});
