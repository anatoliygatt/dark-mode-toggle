<br>

<div align="center">
  <img src="https://i.imgur.com/kMZYgLP.gif" alt="dark-mode-toggle Demo">
</div>

<br>

<h1 align="center">dark-mode-toggle</h1>
<h3 align="center">A dark mode toggle component for <a href="https://reactjs.org">React</a>. Inspired by Tim Silva's <a href="https://dribbble.com/shots/14199649-Dark-Light-Mode-Toggle-Switch-Pattern-A11y">Dark/Light Mode Toggle Switch Pattern A11y</a> Dribbble shot.</h3>

<br>

<p align="center">
  <a href="https://github.com/anatoliygatt/dark-mode-toggle/actions?query=workflow%3ACI">
    <img src="https://img.shields.io/github/actions/workflow/status/anatoliygatt/dark-mode-toggle/ci.yml?branch=master&style=for-the-badge&logo=github&label=CI&labelColor=000000" alt="Github CI Workflow Status">
  </a>
  <a href="https://www.npmjs.com/package/@anatoliygatt/dark-mode-toggle">
    <img src="https://img.shields.io/npm/v/@anatoliygatt/dark-mode-toggle.svg?style=for-the-badge&logo=npm&labelColor=000000" alt="NPM Version">
  </a>
  <a href="https://github.com/anatoliygatt/dark-mode-toggle/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/anatoliygatt/dark-mode-toggle.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=ffffff&labelColor=000000" alt="License">
  </a>
</p>

<br>

## 📖 Table of Contents

- [🚀 Getting Started](#-getting-started)
  - [⚡️ Quick Start](#%EF%B8%8F-quick-start)
  - [💻 Live Demo](#-live-demo)
- [⚙️ Configuration](#%EF%B8%8F-configuration)
- [♿️ Accessibility](#%EF%B8%8F-accessibility)
- [👨🏼‍⚖️ License](#%EF%B8%8F-license)

## 🚀 Getting Started

### ⚡️ Quick Start

```shell
npm install @anatoliygatt/dark-mode-toggle @emotion/react @emotion/styled
```

```jsx
import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function Example() {
  const [mode, setMode] = useState('dark');
  return (
    <DarkModeToggle
      mode={mode}
      dark="Dark"
      light="Light"
      size="lg"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        setMode(mode);
      }}
    />
  );
}
```

### 💻 Live Demo

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-anatoliygatt-dark-mode-toggle-s0thsv)

## ⚙️ Configuration

`DarkModeToggle` supports the following props:

| Prop                       | Type     | Default value           | Description                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | -------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mode                       | string   | `dark`                  | The color scheme mode.                                                                                                                                                                                                                                                                                                                      |
| dark                       | string   | `undefined`             | The dark mode label text.                                                                                                                                                                                                                                                                                                                   |
| light                      | string   | `undefined`             | The light mode label text.                                                                                                                                                                                                                                                                                                                  |
| onChange                   | Function | `undefined`             | The callback invoked when the mode changes.                                                                                                                                                                                                                                                                                                 |
| size                       | string   | `sm`                    | The size of the toggle switch (w/o labels). There are 3 available sizes:<ul><li>`sm` — 48x28px</li><li>`md` — 72x42px</li><li>`lg` — 96x56px</li></ul>**N.B.** If label(s) are used, their font size is going to scale proportionally to the toggle switch as follows:<ul><li>`sm` — 12px</li><li>`md` — 18px</li><li>`lg` — 24px</li></ul> |
| inactiveLabelColor         | string   | `#b9bdc1`               | The color of the label(s) when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                               |
| inactiveLabelColorOnHover  | string   | `#fcfefe`               | The color of the label(s) on hover, when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                     |
| inactiveLabelColorOnActive | string   | `#cdd1d5`               | The color of the label(s) on active, when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                    |
| activeLabelColor           | string   | `#5b5e62`               | The color of the label(s) when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                                  |
| activeLabelColorOnHover    | string   | `#404346'`              | The color of the label(s) on hover, when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                        |
| activeLabelColorOnActive   | string   | `#010101`               | The color of the label(s) on active, when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                       |
| inactiveTrackColor         | string   | `#dce0e3`               | The color of the track when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                                  |
| inactiveTrackColorOnHover  | string   | `#fcfefe`               | The color of the track on hover, when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                        |
| inactiveTrackColorOnActive | string   | `#cdd1d5`               | The color of the track on active, when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                       |
| activeTrackColor           | string   | `#404346`               | The color of the track when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                                     |
| activeTrackColorOnHover    | string   | `#2d2f31`               | The color of the track on hover, when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                           |
| activeTrackColorOnActive   | string   | `#141516`               | The color of the track on active, when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                          |
| inactiveThumbColor         | string   | `#2d2f31`               | The color of the thumb when the toggle switch is in an inactive/off state.                                                                                                                                                                                                                                                                  |
| activeThumbColor           | string   | `#dce0e3`               | The color of the thumb when the toggle switch is in an active/on state.                                                                                                                                                                                                                                                                     |
| focusRingColor             | string   | `rgb(59 130 246 / 0.5)` | The color of the toggle switch's focus ring.                                                                                                                                                                                                                                                                                                |

## ♿️ Accessibility

In order to comply with the web accessibility standards, we must make use of the `ariaLabel` prop, like so:

```jsx
function AccessibleExample() {
  return <DarkModeToggle ariaLabel="Toggle color scheme" />;
}
```

## 👨🏼‍⚖️ License

[MIT](https://github.com/anatoliygatt/dark-mode-toggle/blob/master/LICENSE)
