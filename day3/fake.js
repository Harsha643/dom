let printData=async()=>{
	try{
		let response = await fetch("https://fakestoreapi.com/products",{"method":"GET"})
		if(!response.ok){
			throw new Error ("data is not found")

		}else{
			let data=await response.json()
            console.log(data)
			get(data)
		}
	

	}catch(error){
		alert("data is failed to fetch")
	}
	
}
printData()
function get(data){
    // console.log(data)
    let div =document.createElement("div")
    div.className="parent"
  
    data.forEach(ele => {
        // console.log(ele)
        let div1=document.createElement("div")
    div1.className="parent1"
        for (let a in ele){
            // console.log(a)
            if(a!="rating"){
                if(a=="image"){
                    let img=document.createElement("img")
                img.className="container"
                img.src=ele.image
                div1.append(img)
                }
            }
            
        }
      
        for (let a in ele){
            // console.log(a)
            if(a!="rating"){
                if((a!=="image")&(a!=="description")){
                    let p1=document.createElement("p")
                    p1.innerText=`${a}:${ele[a]}`
                    div1.append(p1)
                }
               

            }
            
        }
        div.append(div1)  
    })
      
   document.body.append(div)
}
