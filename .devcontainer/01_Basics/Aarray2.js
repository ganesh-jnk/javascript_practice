marvel_heros=["Thor","IronMan","Hulk"]
dc_heros=["SuperMan","Flash","BatMan"]
// console.log(marvel_heros.push(dc_heros))
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)
const all_heros2=[...marvel_heros,...dc_heros]
console.log(all_heros2)
const anotherArray=[1,[2,3,[4,5]],6,[7,8]]
console.log(anotherArray.flat(Infinity))
console.log(Array.isArray("Ganesh"))
console.log(Array.from("Ganesh"))

let score1=100
let score2=200
let score3=100

console.log(Array.of(score1,score2,score3))

