# deb
CommonJS tiny browser debugging utility for your libraries and applications.

You can use it with webpack.

[![build status](https://img.shields.io/travis/demohi/deb/master.svg?style=flat-square)](https://travis-ci.org/demohi/deb)
[![npm version](https://img.shields.io/npm/v/deb.svg?style=flat-square)](https://www.npmjs.com/package/deb)
[![npm downloads](https://img.shields.io/npm/dm/deb.svg?style=flat-square)](https://www.npmjs.com/package/deb)

## Installation

```
$ npm install deb
```

## Usage

```javascript
// add webpack plugin  
plugins: [
  new webpack.DefinePlugin({
    "process.env": {
      DEB: true
    }
  })
],
```

```javascript
var deb = require('deb');
var debug1 = deb('1');
var debug2 = deb('2');
var debug3 = deb('3');
debug1('1');
debug2('2');
debug3('3');
```
## Screenshot

![screenshot](screenshot.png)

## TODO

*  enable log with space or comma-delimited names
