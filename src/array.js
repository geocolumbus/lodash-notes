const _ = require('lodash')

let a = _.chunk([0, 1, 2, 3], 2)
console.log(a) //  [ [ 0, 1 ], [ 2, 3 ] ]

let b1
let b = _.compact([1, 2, 0, -1, false, null, 'George', '', b1])
console.log(b) //  [ 1, 2, -1, 'George' ]

let c = _.concat([1, 2, 3], ['George', 'Alex'], {'place': 'ohio'}, [[1, 2], [3, 4]])
console.log(c) //  [ 1, 2, 3, 'George', 'Alex', { place: 'ohio' }, [ 1, 2 ], [ 3, 4 ] ]

let d = _.difference(['a', 'b', 'c', 'd', 'e'], ['b', 'e'])
console.log(d) //  [ 'a', 'c', 'd' ]

let e = _.differenceBy(['A', 'B', 'C', 'D', 'E'], ['a', 'c'])
console.log(e) //  ['A', 'B', 'C', 'D', 'E']
let e1 = _.differenceBy(['A', 'B', 'C', 'D', 'E'], ['a', 'c'], item => {return item.toLowerCase()})
console.log(e1) //  [ 'B', 'D', 'E' ]

