# React UI Style Guide

Living Style Guide with React, webpack, ES6 and Sass.

## Environment setup

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading when you change files):

```sh
  $ npm start
```

Open [http://localhost:3001](http://localhost:3001) in a browser. `./src/main.js` is the entry point.

## Add new components to style guide

Define each component you want to include in your style guide `components` array in `./src/main.js`, like so:

```javascript
const components = [
  {
    component: require('./components/Card/Card'),
    name: 'Card',
    description: require('./components/Card/README.md'),
    props: {
      title: "Card title",
      text: "I am a very simple card."
    },
    modifiers: []
  }
];
```

## Similar projects

- [react-styleguide-generator](https://github.com/pocotan001/react-styleguide-generator)
- [react-styleguidist](https://github.com/sapegin/react-styleguidist)
- [react-style-guide](https://github.com/alexlande/react-style-guide)
- [react-styleguide](https://github.com/jmfurlott/react-styleguide)
