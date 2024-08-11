let gitUser=new Object()
// singleton is a design pattern that ensures only one instance of a class exists throughout your application
// provide a global point of access to its methods and properties
// Normal class we need to create instances of classes to access 
console.log(gitUser)
// const gitUser={}

gitUser={
    name:"Ganesh",
    isLoggedIn:false,
    fullName:{firstName:"Ganesh",
             lastName:"Naik"
    }
}
console.log(gitUser)

const obj1={1:"ac",
            2: "bc"
}
const obj2={1:"a",
    2: "b"
}

const obj3=Object.assign({},obj1, obj2)
console.log(obj3)

const obj4={1:"ac",
    2: "bc"
}
const obj5={3:"a",
4: "b"
}

const obj6={...obj4, ...obj5}
console.log(obj6)

// console.log(Object.keys(gitUser))
// console.log(Object.values(gitUser))
// console.log(Object.entries(gitUser))

const {name,isLoggedIn:login}=gitUser
console.log(name)
console.log(login)