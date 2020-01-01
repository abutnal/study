let items = [
{name:'TV', price:20000},
{name:'Mobile', price:40000},
{name:'Laptop', price:60000},
{name:'Printer', price:2000}
];





const fetchProduct = () =>{
		setTimeout(()=>{
			let output = '';
			items.forEach((item)=>{
				output += `<li>${item.name}</li>`
			})
			document.body.innerHTML = output;
		}, 1000)
}


const addProduct = (item, callback) => {
		setTimeout(()=>{
				items.push(item);
				callback();
		},2000)
}



addProduct({name:'Monitor', price:25000}, fetchProduct);