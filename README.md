Via TRM React Demo
==================

## Install

```
yarn
```


## Dev
```
yarn start
```

## Build prod
```
yarn build
```

## Heroku Deployment
```
heroku buildpacks:set heroku/nodejs
heroku create -b heroku create -b https://github.com/lkkadiri/via-trm
git push heroku master
heroku open
```
