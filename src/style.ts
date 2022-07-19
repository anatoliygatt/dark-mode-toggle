import styled from '@emotion/styled';
import type { Size, StyledProps } from './DarkModeToggle';

export const TOGGLE_TRANSITION_DURATION = 250;

function sizeToScale(size: Size): number {
  switch (size) {
    case 'sm':
      return 1;
    case 'md':
      return 1.5;
    case 'lg':
      return 2;
  }
}

export const StyledDarkModeToggle = styled.div<Required<StyledProps>>`
  display: inline-flex;
  align-items: center;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  span {
    transition: color ${TOGGLE_TRANSITION_DURATION}ms ease-in-out;
    padding: ${(props) => 8 * sizeToScale(props.size)}px
      ${(props) => 12 * sizeToScale(props.size)}px;
    cursor: pointer;
    font-size: ${(props) => 12 * sizeToScale(props.size)}px;
    font-weight: 600;
    text-transform: uppercase;

    &:nth-of-type(1) {
      &:hover {
        color: ${(props) => props.activeLabelColorOnHover};
      }

      &:active {
        color: ${(props) => props.activeLabelColorOnActive};
      }
    }

    &:nth-of-type(2) {
      &:hover {
        color: ${(props) => props.inactiveLabelColorOnHover};
      }

      &:active {
        color: ${(props) => props.inactiveLabelColorOnActive};
      }
    }
  }

  input {
    position: relative;
    overflow: hidden;
    transition: all ${TOGGLE_TRANSITION_DURATION}ms ease-in-out;
    transition-property: box-shadow, background-color;
    appearance: none;
    margin: 0;
    outline: none;
    border-radius: ${(props) => 14 * sizeToScale(props.size)}px;
    width: ${(props) => 48 * sizeToScale(props.size)}px;
    height: ${(props) => 28 * sizeToScale(props.size)}px;
    background-color: ${(props) => props.inactiveTrackColor};
    cursor: pointer;
    user-select: none;

    &:checked {
      background-color: ${(props) => props.activeTrackColor};

      &:hover,
      &:hover::after {
        background-color: ${(props) => props.activeTrackColorOnHover};
      }

      &:active,
      &:active::after {
        background-color: ${(props) => props.activeTrackColorOnActive};
      }

      &::before {
        left: ${(props) => 24 * sizeToScale(props.size)}px;
        background-color: ${(props) => props.activeThumbColor};
      }

      &::after {
        top: ${(props) => 12 * sizeToScale(props.size)}px;
        right: ${(props) => 2 * sizeToScale(props.size)}px;
        width: ${(props) => 1 * sizeToScale(props.size)}px;
        height: ${(props) => 1 * sizeToScale(props.size)}px;
        border-radius: ${(props) => 0.5 * sizeToScale(props.size)}px;
        background-color: ${(props) => props.activeTrackColor};
      }
    }

    &:hover,
    &:hover::after {
      background-color: ${(props) => props.inactiveTrackColorOnHover};
    }

    &:focus,
    &:focus-visible {
      box-shadow: 0 0 0 ${(props) => 2 * sizeToScale(props.size)}px
        ${(props) => props.focusRingColor};
    }

    &:focus:not(:focus-visible) {
      box-shadow: none;
    }

    &:active,
    &:active::after {
      background-color: ${(props) => props.inactiveTrackColorOnActive};
    }

    &::before {
      content: '';
      position: absolute;
      top: ${(props) => 4 * sizeToScale(props.size)}px;
      left: ${(props) => 4 * sizeToScale(props.size)}px;
      display: block;
      transition: all ${TOGGLE_TRANSITION_DURATION}ms ease-in-out;
      transition-property: left, background-color;
      width: ${(props) => 20 * sizeToScale(props.size)}px;
      height: ${(props) => 20 * sizeToScale(props.size)}px;
      border-radius: ${(props) => 12 * sizeToScale(props.size)}px;
      background-color: ${(props) => props.inactiveThumbColor};
    }

    &::after {
      content: '';
      position: absolute;
      top: ${(props) => -2 * sizeToScale(props.size)}px;
      right: ${(props) => 2 * sizeToScale(props.size)}px;
      display: block;
      transition: all ${TOGGLE_TRANSITION_DURATION}ms ease-in-out;
      transition-property: top, right, width, height, border-radius,
        background-color;
      width: ${(props) => 32 * sizeToScale(props.size)}px;
      height: ${(props) => 32 * sizeToScale(props.size)}px;
      border-radius: ${(props) => 16 * sizeToScale(props.size)}px;
      background-color: ${(props) => props.inactiveTrackColor};
    }
  }

  &[data-checked='false'] {
    span {
      color: ${(props) => props.inactiveLabelColor};

      &:nth-of-type(1) {
        pointer-events: none;
      }
    }
  }

  &[data-checked='true'] {
    span {
      color: ${(props) => props.activeLabelColor};

      &:nth-of-type(2) {
        pointer-events: none;
      }
    }
  }

  &[data-transition-disabled='true'] {
    *,
    *::before,
    *::after {
      transition-duration: 0ms;
    }
  }
`;
