let users = {
  Alan: {
    age: 27,
    online: false
  },
  Vlad: {
    age: 21,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false,
    // this is a hidden object. We will find with with foundHidden function  
    hidden: {
      mister: "X" 
    }
  },
  Ryan: {
    age: 19,
    online: true,
    hidden: {
      mister: "X" 
    }
  }
}

let countOnline = (obj) => {
      let num = 0
// iterate object with for...in loop
      for (let user in obj) {
        obj[user]['online'] ? num++ : null
  }
  return num
}


let off = 0

let countOff = (obj) => {
  for(person in obj) {
    obj[person]['online'] != true ? off++ : null
  }
  return off
}

const foundHidden = (obj) => {
  let result = ''
  const keysArr = Object.keys(obj)
  // mapping over the array of object's keys
  keysArr.map((item, index) => {
  // we need check here to not break the loop when hidden is undefined
    obj[item]["hidden"] !== undefined ?
  // when it is defined we return value from the array of keys with current index 
      (obj[item]["hidden"]['mister'] == 'X' ? result += " found in " + Object.getOwnPropertyNames(obj)[index] : null) :
      null
  })
  return result
}
console.log(foundHidden(users))

console.log(countOnline(users))
console.log(countOff(users))
