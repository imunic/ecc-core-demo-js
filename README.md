# ecc-core-demo-js

## Prerequisites

* node >= 12.16.1

## Install

From the root directory run:

```sh
npm i
```

It will install required dependencies.

## Usage

The app will start on port 8080 by default, the port can be changed by setting the `PORT` environment variable.

### Starting the app

From the root directory run:

```sh
npm start
```

### Starting the app in development mode

From the root directory run:

```sh
npm run start-nodemon
```

This will start the app with nodemon and observe the directory for changes. Once a change is observed the app will be restarted.

## Run tests

Jest is used for testing, you can run the tests from the root directory:

```sh
npm test
```
