import type { Parameters } from '@storybook/api';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color|colorOnHover|colorOnActive)$/i,
      date: /Date$/,
    },
  },
};
