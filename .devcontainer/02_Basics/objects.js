const last_name=Symbol("Nk")
const account_details={
    name:"Ganesh",
    "mail_id": "ganesh.n3396@gmail.com",
    [last_name]: "Naik",
    last_login_days:["Monday","Saturday"]
}
console.log(account_details["mail_id"])
console.log(account_details.name)
console.log(account_details["name"])

console.log(account_details[last_name])
// Object.freeze(account_details)
account_details["name"]="Umesh"
console.log(account_details["name"])


const greetings= function(){
    console.log(`Hello ${account_details["name"]}`)
}

account_details.greetingTwo= function(){
   console.log(`Hello ${this.name}`)
}
console.log(account_details.greetingTwo())