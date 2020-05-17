# Dscrtz
Generate random value from discrete distribution
## Install
```sh
npm i dscrtz
```
## Use
```js
const Discrete = require("dscrtz")
const distribution = new Discrete([["A", 11], ["B", 20], ["C", 15])

distribution.rand(Math.random())
```
