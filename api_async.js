
const first = ()=>{
  var promise = new Promise((resolve, reject)=>{
	if(true){
		setTimeout(()=>{
           console.log('first');
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res=>res.json())
           .then(data=>{
           	resolve(data);
           })
           
		},1000)
	}
	else{
		reject('Err: someting went wrong in first api call');
	}
  });
  return promise;
}


const second = () =>{
	var promise = new Promise((resolve, reject)=>{
		if(true){
				setTimeout(()=>{
			console.log('second');
			fetch('https://jsonplaceholder.typicode.com/photos')
           .then(res=>res.json())
           .then(data=>{
           	resolve(data);
           })
				},3000)
		}else{
				reject('Err: someting went wrong in second api call');
		}
	});
	return promise;
}



// ASYNC AND AWAIT----------------------------------------------
const result = async () =>{
	try{
		  await second().then(res=>{ console.log(res); })
		  first().then(res=>{ console.log(res)})
	}catch(err){
		  console.log(err);
	}
	

}
result();
// -------------------------------------------------------------
