/* jshint esnext: true */
// Promises
const first = (value) =>{
      return value + 2;
}

const second = (value) =>{
      return value + 2;
}

const third = (value) =>{
      return value + 2;
}

var promise = new Promise((resolve, reject)=>{
   resolve(2);
});

promise.then(first).then(second).then(third).then((response)=>{
   console.log(response);
})
