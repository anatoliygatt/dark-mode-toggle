import * as React from 'react';
import { useIsTransitionDisabled } from './hooks/useIsTransitionDisabled';
import { TOGGLE_TRANSITION_DURATION, StyledDarkModeToggle } from './style';

export type Mode = 'dark' | 'light';

export type Size = 'sm' | 'md' | 'lg';

export interface StyledProps {
  size?: Size;
  inactiveLabelColor?: string;
  inactiveLabelColorOnHover?: string;
  inactiveLabelColorOnActive?: string;
  activeLabelColor?: string;
  activeLabelColorOnHover?: string;
  activeLabelColorOnActive?: string;
  inactiveTrackColor?: string;
  inactiveTrackColorOnHover?: string;
  inactiveTrackColorOnActive?: string;
  activeTrackColor?: string;
  activeTrackColorOnHover?: string;
  activeTrackColorOnActive?: string;
  inactiveThumbColor?: string;
  activeThumbColor?: string;
  focusRingColor?: string;
}

export interface AccessibilityProps {
  ariaLabel?: string;
}

export interface Props extends StyledProps, AccessibilityProps {
  mode?: Mode;
  dark?: string;
  light?: string;
  onChange?: (mode: Mode) => void;
}

export function DarkModeToggle({
  mode = 'dark',
  dark,
  light,
  onChange,
  size = 'sm',
  inactiveLabelColor = '#b9bdc1',
  inactiveLabelColorOnHover = '#fcfefe',
  inactiveLabelColorOnActive = '#cdd1d5',
  activeLabelColor = '#5b5e62',
  activeLabelColorOnHover = '#404346',
  activeLabelColorOnActive = '#010101',
  inactiveTrackColor = '#dce0e3',
  inactiveTrackColorOnHover = '#fcfefe',
  inactiveTrackColorOnActive = '#cdd1d5',
  activeTrackColor = '#404346',
  activeTrackColorOnHover = '#2d2f31',
  activeTrackColorOnActive = '#141516',
  inactiveThumbColor = '#2d2f31',
  activeThumbColor = '#dce0e3',
  focusRingColor = 'rgb(59 130 246 / 0.5)',
  ariaLabel,
}: Props) {
  const isTransitionDisabled = useIsTransitionDisabled(
    size,
    TOGGLE_TRANSITION_DURATION
  );

  return (
    <StyledDarkModeToggle
      size={size}
      inactiveLabelColor={inactiveLabelColor}
      inactiveLabelColorOnHover={inactiveLabelColorOnHover}
      inactiveLabelColorOnActive={inactiveLabelColorOnActive}
      activeLabelColor={activeLabelColor}
      activeLabelColorOnHover={activeLabelColorOnHover}
      activeLabelColorOnActive={activeLabelColorOnActive}
      inactiveTrackColor={inactiveTrackColor}
      inactiveTrackColorOnHover={inactiveTrackColorOnHover}
      inactiveTrackColorOnActive={inactiveTrackColorOnActive}
      activeTrackColor={activeTrackColor}
      activeTrackColorOnHover={activeTrackColorOnHover}
      activeTrackColorOnActive={activeTrackColorOnActive}
      inactiveThumbColor={inactiveThumbColor}
      activeThumbColor={activeThumbColor}
      focusRingColor={focusRingColor}
      data-transition-disabled={isTransitionDisabled}
      data-checked={mode === 'light'}
      data-testid="dark-mode-toggle"
    >
      {dark && (
        <span
          onClick={() => {
            onChange?.('dark');
          }}
          aria-hidden="true"
        >
          {dark}
        </span>
      )}
      <input
        type="checkbox"
        role="switch"
        checked={mode === 'light'}
        aria-label={ariaLabel}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange?.(event.target.checked ? 'light' : 'dark');
        }}
      />
      {light && (
        <span
          onClick={() => {
            onChange?.('light');
          }}
          aria-hidden="true"
        >
          {light}
        </span>
      )}
    </StyledDarkModeToggle>
  );
}
