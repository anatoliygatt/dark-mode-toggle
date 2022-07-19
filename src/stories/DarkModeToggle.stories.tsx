import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DarkModeToggle } from '../DarkModeToggle';
import type { Mode } from '../DarkModeToggle';
import { TOGGLE_TRANSITION_DURATION } from '../style';

export default {
  title: 'DarkModeToggle',
  component: DarkModeToggle,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    controls: { disabled: true },
    actions: { disabled: true },
    a11y: { disable: true },
  },
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = (args) => {
  const [mode, setMode] = React.useState<Mode>('dark');
  return (
    <div
      style={{
        transition: `background-color ${TOGGLE_TRANSITION_DURATION}ms ease-in-out`,
        padding: '16px',
        width: 'calc(100vw - 32px)',
        height: 'calc(100vh - 32px)',
        backgroundColor: mode === 'dark' ? '#26272a' : '#d6dade',
      }}
    >
      <DarkModeToggle
        {...args}
        mode={mode}
        onChange={(mode) => {
          setMode(mode);
          action('onChange')(mode);
        }}
      />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  dark: 'Dark',
  light: 'Light',
  size: 'sm',
  inactiveLabelColor: '#b9bdc1',
  inactiveLabelColorOnHover: '#fcfefe',
  inactiveLabelColorOnActive: '#cdd1d5',
  activeLabelColor: '#5b5e62',
  activeLabelColorOnHover: '#404346',
  activeLabelColorOnActive: '#010101',
  inactiveTrackColor: '#dce0e3',
  inactiveTrackColorOnHover: '#fcfefe',
  inactiveTrackColorOnActive: '#cdd1d5',
  activeTrackColor: '#404346',
  activeTrackColorOnHover: '#2d2f31',
  activeTrackColorOnActive: '#141516',
  inactiveThumbColor: '#2d2f31',
  activeThumbColor: '#dce0e3',
  focusRingColor: 'rgb(59 130 246 / 0.5)',
  ariaLabel: 'Toggle color scheme',
};
Playground.argTypes = {
  mode: {
    table: {
      disable: true,
    },
  },
};
Playground.parameters = {
  controls: { disabled: false },
  actions: { disabled: false },
  a11y: { disable: false },
};

export const Default = Template.bind({});

export const WithLabels = Template.bind({});
WithLabels.args = {
  dark: 'Dark',
  light: 'Light',
};

export const Customized = Template.bind({});
Customized.args = {
  size: 'lg',
  inactiveTrackColor: '#e2e8f0',
  inactiveTrackColorOnHover: '#f8fafc',
  inactiveTrackColorOnActive: '#cbd5e1',
  activeTrackColor: '#334155',
  activeTrackColorOnHover: '#1e293b',
  activeTrackColorOnActive: '#0f172a',
  inactiveThumbColor: '#1e293b',
  activeThumbColor: '#e2e8f0',
};
