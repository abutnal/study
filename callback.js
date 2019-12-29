/* jshint esnext: true */
// Callback function examples (nested, we can say it callback hell)
const first = (value, callback) =>{
      callback(value + 2, false);
}

const second = (value, callback) =>{
      callback(value + 2, false);
}

const third = (value, callback) =>{
      callback(value + 2, false);
}



   first(2, (firstResult, err)=>{
     if(!err){
       console.log(firstResult);
       second(firstResult, (secondResult, err)=>{
         if(!err){
           console.log(secondResult);
           third(secondResult, (thirdResult, err)=>{
            if(!err){
               console.log(thirdResult);
            }
           })
         }
       })
     }
   });

