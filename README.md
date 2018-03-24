# package-collector-doc

[![Build Status](https://travis-ci.org/cange/package-collector-doc.svg?branch=master)](https://travis-ci.org/cange/package-collector-doc)

> A study of state of the art frameworks and mythologies

## Installing / Getting started

```shell
npm install yarn
yarn install
```

This will install all dependencies.

## Developing

### Built With

* [React](https://reactjs.org) as web engine
* [Redux](https://redux.js.org) for state management
* [Babeljs](http://babeljs.io) as ES2015+ transpiler engine
* [webpack](http://webpack.js.org) as build engine
* [Sass](http://sass-lang.com) as CSS preprocess engine
* based on [Material Design](https://material.io/guidelines) principles

### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/cange/package-collector-doc.git
cd package-collector-doc/
npm install yarn
yarn install
```

### Building

To start the web app run the script below:

```shell
yarn start
```

This will start a development server and opens a url http://localhost:8080/ in your default browser.

## Tests

The test will check all react Component.

```shell
yarn test
```

## Style guide

### Component documentation

See the existing components by running:
```sh
yarn doc:components
```
this will create a static documentation in the `styleguide/` directory.

### Sass documentation

See the existing mixins and functions by running:
```shell
yarn doc:sass
```
this will create a static documentation in the `sassdoc/` directory.

### Code linter

The command below will run the linter on the whole codebase.

```shell
yarn lint
```

## TODOs

* [x] set up a build tool
* [x] enable ES2015+
* [x] set up a JavaScript framework
* [x] set up a test runner
* [x] set up CSS autoprefixer
* [x] set up linter for JavaScript
* [x] set up Sass documentation generator
* [x] set up state handling
* [ ] set up type checker
* [ ] set up linter for SCSS
* [ ] set up routing (single page approach)
* [ ] set up an entrypoint for generic content

## Licensing

[MIT](./LICENSE)
