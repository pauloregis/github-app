# Olist Front end test

## Table of Contents

- [Screenshots](#screenshots)
- [Main Tools](#main-tools)
- [Dependencies](#dependencies)
- [Up and running](#up-and-running)
- [Troubleshooting on windows](#troubleshooting-on-windows)
- [Available Scripts](#available-scripts)

## <a name="screenshots"></a>Screenshots

### Running App

![Running App - screenshot](https://i.imgur.com/C2iQkz5.gif)

### Based on rem (CSS)

![Based on rem - screenshot](https://i.imgur.com/9iiCxg3.gif)

### Components documented with Storybook

![Components documented with Storybook - screenshot](https://i.imgur.com/lMd7Sb5.gif)

### Utility functions

![Testing utility functions - screenshot](https://i.imgur.com/7571yRz.gif)

## Main Tools

* [React](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/) + [Polished](https://polished.js.org/)
* [Formik](https://github.com/jaredpalmer/formik) + [Yup](https://github.com/jquense/yup)
* [Webpack 3+](https://webpack.github.io/)
* [Babel](https://babeljs.io/)
* [Storybook](https://storybook.js.org/)
* [Jest](https://facebook.github.io/jest/) + [Chai](http://chaijs.com/)

> Initial structure based on: [Workflow ReactJS - by fdaciuk](https://github.com/fdaciuk/workflow-reactjs)

## Dependencies:

- Node.js `>=` v6;

## Up and running

- Clone this repository: `git clone git@github.com:fdaciuk/workflow-reactjs.git`;
- Install dependencies: `yarn` (or `npm i`);
- Run `yarn dev` (or `npm start`) to develop on `http://localhost:3000`
- Run `yarn build` (or `npm run build`) for production build (files will be generated on `dist` directory)
- Run `yarn storybook (or npm run storybook)` to show the documentation on `http://localhost:6006`

## Troubleshooting on Windows

If you are on Windows, and try to run `yarn lint`, you'll get an error
because `spawn` module does not work very well on Windows.

You should install `cross-spawn`, and edit `gulpfile.js`, removing line `4` and
uncomment line `7`.

## Available Scripts

- `yarn dev (or npm run dev)`: Starts the application on development mode
- `yarn test (or npm test)`: Run tests once
- `yarn test:watch (or npm run test:watch)`: Run tests in watch mode
- `yarn build (or npm run build)`: Build project to production
- `yarn build:analyzer (or npm run build:analyzer)`: Build project to production and open bundle analyzer on `8888` port
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `yarn update-packages`: Update all packages to the latest version
- `yarn start (or npm start)`: Special script reserved to run production code. Change as you wish. For now, it is the same as `yarn dev`
- `yarn lint (or npm run lint)`: Run lint check
- `yarn lint:watch (or npm run lint:watch)`: Run lint chech on watch mode
- `yarn lint:fix (or npm run lint:fix)`: Run lint check + auto fixes
