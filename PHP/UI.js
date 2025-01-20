async function getData(){
    let response=await fetch("https://brick-tourmaline-case.glitch.me/products")
    try{
        if(!response.ok){
            throw new Error(response.statusText)

        }
        let student = await response.json()
        student.forEach(element => {
            let container=document.getElementsByClassName("container")[0];
            let item =document.createElement("div")
            item.className="item"
            item.innerHTML=
                `
                    <img src='${element.image}'>
                    <p>${element.productName}</p>

            `
            container.appendChild(item)



        });
    }catch(error){
        console.error(error)
    }
}
document.addEventListener("DOMContentLoaded",getData)