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
    //here is nested object. We will find it and highlight key(name who has hidden mister: "X"
    hiden: {
      mister: "X" 
    }

  },
  Ryan: {
    age: 19,
    online: true
  }
};

let countOnline = (obj) => {
      let num = 0
// iterate object with for...in loop
      for (let user in obj) {
        obj[user]['online'] ? num += 1 : null
  }
  return num
}

let countOffline = (obj) => {
  let num = 0;
// iterate object with map using Object.keys
  Object.keys(obj).map((key) => obj[key]['online']  == false ? num+= 1 : null )
  return num
}

console.log('users offline ' + countOffline(users))

console.log('users online ' + countOnline(users));
