import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { DarkModeToggle } from '../DarkModeToggle';
import type { Mode } from '../DarkModeToggle';

jest.mock('../hooks/useIsTransitionDisabled', () => {
  return {
    useIsTransitionDisabled: jest.fn(() => false),
  };
});

describe('DarkModeToggle', () => {
  test('renders without crashing', () => {
    expect(() => {
      render(<DarkModeToggle />);
    }).not.toThrowError();
  });

  test('renders into the document', () => {
    render(<DarkModeToggle />);
    expect(screen.getByTestId('dark-mode-toggle')).toBeInTheDocument();
  });

  test('renders with the default size and colors', () => {
    render(<DarkModeToggle />);
    expect(screen.getByTestId('dark-mode-toggle')).toMatchSnapshot();
  });

  test('renders with the size="md" and default colors', () => {
    render(<DarkModeToggle size="md" />);
    expect(screen.getByTestId('dark-mode-toggle')).toMatchSnapshot();
  });

  test('renders with the size="lg" and custom colors', () => {
    render(
      <DarkModeToggle
        size="lg"
        inactiveTrackColor="#e2e8f0"
        inactiveTrackColorOnHover="#f8fafc"
        inactiveTrackColorOnActive="#cbd5e1"
        activeTrackColor="#334155"
        activeTrackColorOnHover="#1e293b"
        activeTrackColorOnActive="#0f172a"
        inactiveThumbColor="#1e293b"
        activeThumbColor="#e2e8f0"
      />
    );
    expect(screen.getByTestId('dark-mode-toggle')).toMatchSnapshot();
  });

  test('renders with the labels', () => {
    render(<DarkModeToggle dark="Dark" light="Light" />);
    expect(screen.getByTestId('dark-mode-toggle')).toMatchSnapshot();
  });

  test('renders with an aria-label attribute when ariaLabel="Toggle color scheme"', () => {
    render(<DarkModeToggle ariaLabel="Toggle color scheme" />);
    expect(screen.getByRole('switch')).toHaveAttribute(
      'aria-label',
      'Toggle color scheme'
    );
  });

  test('responds to a user interaction', async () => {
    function ControlledDarkModeToggle() {
      const [mode, setMode] = React.useState<Mode>('dark');
      return (
        <DarkModeToggle
          dark="Dark"
          light="Light"
          mode={mode}
          onChange={(mode) => {
            setMode(mode);
          }}
        />
      );
    }

    render(<ControlledDarkModeToggle />);

    expect(screen.getByRole('switch')).not.toBeChecked();
    await userEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch')).toBeChecked();
    await userEvent.click(screen.getByRole('switch'));
    expect(screen.getByRole('switch')).not.toBeChecked();

    await userEvent.click(screen.getByText('Light'));
    expect(screen.getByRole('switch')).toBeChecked();
    await userEvent.click(screen.getByText('Dark'));
    expect(screen.getByRole('switch')).not.toBeChecked();
  });

  test('responds to a change in focused state when tabbing with the keyboard', async () => {
    render(<DarkModeToggle />);

    expect(screen.getByRole('switch')).not.toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('switch')).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('switch')).not.toHaveFocus();
  });

  test('complies with the web accessibility standards', async () => {
    const { container } = render(
      <DarkModeToggle ariaLabel="Toggle color scheme" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
