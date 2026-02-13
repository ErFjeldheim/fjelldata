import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Portfolio from '../Portfolio';
import { projects } from '../../data/projects';

describe('Portfolio Component', () => {
  it('renders all projects from data', () => {
    render(<Portfolio />);

    expect(screen.getByText('Portefølje')).toBeInTheDocument();

    projects.forEach((project) => {
      const projectTitles = screen.getAllByText(project.title);
      expect(projectTitles.length).toBeGreaterThan(0);
    });
  });

  it('links have target="_blank" and rel="noopener noreferrer"', () => {
    render(<Portfolio />);

    const links = screen.getAllByRole('link');
    
    const projectLinks = links.filter(link => 
      link.textContent?.includes('Besøk') || link.textContent?.includes('Kildekode')
    );

    projectLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
