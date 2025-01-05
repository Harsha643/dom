
async function getData() {
    try{
        let response = await fetch("http://localhost:5000/data", {method:"GET"})
        if(!response.ok){
            throw new Error("data is not found")
        }
        let data = await response.json()
        printData(data)
    }catch(error){
        console.log("data failed to fetch")
    }
    
}

function printData(data){
    let table =document.createElement("table")
    let thead =document.createElement("thead")
    let trhead =document.createElement("tr")
    let headings=["id","title","price", "description","category","image","button"]
    headings.forEach(ele=>{
        let th=document.createElement("th")
        th.innerText=ele;
        trhead.appendChild(th)
    })
let tbody =document.createElement("tbody")

data.forEach(obj=>{
    let tr=document.createElement("tr")
    for(let key in obj){
     console.log(key)
        if(key!=="rating"){
            let td =document.createElement("td")
            if (key === "image") {
            let img = document.createElement("img");
             img.src = obj[key];
                td.appendChild(img);
                 td.innerHTML = `<img src=${obj[key]}>`
                }else{
                      td.innerText = obj[key];
                 }
          
            tr.appendChild(td)
        }
    }
    tbody.appendChild(tr)
})
thead.appendChild(trhead)
table.append(thead,tbody)
document.body.appendChild(table)
}
getData()