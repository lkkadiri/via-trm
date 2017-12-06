Via TRM React Demo
==================

This is a simple React app that mainly has two components:
- MonthGrid.js - A React Component that lets you select multiple months
- StateSelector.js - A React Component that toggles between a Select and a Text input based on the chosen country.

Here is the [Demo](https://still-thicket-80583.herokuapp.com/).


### Requirements
```
Node version - 8.9.2
NPM Version - 5.5.1
Yarn Version - 1.3.2
```

## Install
```
yarn
```

or

```
npm install
```


## Dev
```
yarn start
```
or
```
npm start
```

## Create an optimized production build
```
yarn build
```
or
```
npm run build
```

## Heroku Deployment
```
heroku buildpacks:set heroku/nodejs
heroku create -b https://github.com/lkkadiri/via-trm
git push heroku master
heroku open
```
