let printdata=async()=>{
	try{
		let response = await fetch("http://localhost:3000/data",{"method":"GET"})
		if(!response.ok){
			throw new Error ("data is not found")

		}else{
			let data=await response.json()
			getData(data)
		}
	

	}catch(error){
		alert("data is failed to fetch")
	}
	
}
function getData(data){
	// console.log(data)
	let table=document.createElement("table")
	let thead=document.createElement("thead")
	let trhead=document.createElement("tr")
	let headings=["id","title","price","description","category","image","button"]
	headings.forEach(ele=>{
		let th=document.createElement("th")
		th.innerText=ele;
		trhead.appendChild(th)
	})
	let tbody=document.createElement("tbody")
	data.forEach(obj=>{
		// console.log(obj)
		let tr=document.createElement("tr")
		for (let key in obj){
			// console.log(key)
			if(key=="rating")continue;
			let td=document.createElement("td")
			// tr.style.margin="20px"
			if(key =="image"){
				td.innerHTML=`<img src="${obj[key]}"   style="width:"100px"; height="100px"> `
			}
			else{
				td.innerText=obj[key]
			}
			
			tr.appendChild(td)

		}
		let btn=document.createElement("button")
		btn.style.margin="20px"
			btn.innerText="change"
			tr.appendChild(btn)
		tbody.appendChild(tr)
	})

	thead.appendChild(trhead)
	table.append(thead,tbody)
	document.body.appendChild(table)

}
printdata()