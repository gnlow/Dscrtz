# Dscrtz
Generate random value from discrete distribution
## Example (Deno)
```ts
import {Discrete} from "https://raw.githubusercontent.com/gnlow/dscrtz/master/mod.ts"
const distribution = new Discrete(["A", 11], ["B", 20], ["C", 15])

console.log(distribution.rand(Math.random()))
```
