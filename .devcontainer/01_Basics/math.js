const min = 10
const max =20

console.log(Math.floor(Math.random() * max-min+1)+min)

const myDate= new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())

const currentDate=Date.now()
console.log(currentDate)