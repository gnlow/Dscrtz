module.exports = class Discrete {
    constructor(...items){
        this.values = []
        this.weights = []
        let acc = 0
        items.forEach(
            ([value, weight]) => {
                this.values.push(value)
                this.weights.push(acc += weight)
            }
        )
    }
    rand(seed){
        const key = seed * this.weights[this.weights.length-1]
        let i = 0
        while(this.weights[i]<key){
            i++
        }
        return this.values[i]
    }
}