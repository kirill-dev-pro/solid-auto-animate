# solid-auto-animate

> SolidJS bindings for FormKit's AutoAnimate

[![NPM](https://img.shields.io/npm/v/@zmeu213/solid-auto-animate.svg)](https://www.npmjs.com/package/@zmeu213/solid-auto-animate) [![JavaScript Style Guide](https://badgen.net/badge/code%20style/supreme)](https://www.npmjs.com/package/eslint-config-supreme)

## Install

Install package in 5 different ways

```bash
npm i @zmeu213/solid-auto-animate
```

```bash
yarn add @zmeu213/solid-auto-animate
```

```bash
pnpm add @zmeu213/solid-auto-animate
```

```bash
bun add @zmeu213/solid-auto-animate
```

```
Suggest your best way to install it in deno
```

## Usage

### As directive

```js
import { createSignal } from 'solid-js';
import { createAutoAnimateDirective } from '@zmeu213/solid-auto-animate';

function App() {
  const autoAnimate = createAutoAnimateDirective()

  const [items, setItems] = createSignal([0, 1, 2]);
  const add = () => setItems((current) => [...current, current.length]);

  return (
    <>
      <ul use:autoAnimate={{ duration: 1000 }}>
        <For each={items()}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
      <button onClick={add}>Add number</button>
    </>
  );
}
```

### As primitive

```js
import { createSignal } from 'solid-js';
import { createAutoAnimate } from '@zmeu213/solid-auto-animate';

function App() {
  const [items, setItems] = createSignal([0, 1, 2]);
  const add = () => setItems((current) => [...current, current.length])

  let parent;

  const [parentRef, setEnabled] = createAutoAnimate({ duration: 1000 })

  return (
    <>
      <ul ref={parentRef}>
        <For each={items()}>
          {(item) => <li>{item}</li>}
        </For>
      </ul>
      <button onClick={add}>Add number</button>
    </>
  );
}
```

## License

MIT
