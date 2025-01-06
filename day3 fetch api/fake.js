let table =document.createElement("table")
document.body.append(table)

let thead=document.createElement("thead")
table.append(thead)
let th1=document.createElement("th")
th1.innerText="id"
let th2=document.createElement("th")
th2.innerText="title"
let th3=document.createElement("th")
th3.innerText="price"
let th4=document.createElement("th")
th4.innerText="category"
let th5=document.createElement("th")
th5.innerText="description"
let th6=document.createElement("th")
th6.innerText="image"
thead.append(th1,th2,th3,th4,th5,th6)
// console.log(table)
// co
async function getData() {
    try{
        let response = await fetch("http://localhost:3000/data", {method:"GET"})
        if(!response.ok){
            throw new Error("data is not found")
        }
        let data = await response.json()
        // printData(data)
        // console.log(data[0])
        // data.forEach(ele=>{
        //     let tr =document.createElement("tr")
        //     table.append(tr)
        //     let td1=document.createElement("td")
        //     td1.innerText=ele.id
        //       let td2=document.createElement("td")
        //     td2.innerText=ele.title
        //       let td3=document.createElement("td")
        //     td3.innerText=ele.price
        //       let td4=document.createElement("td")
        //     td4.innerText=ele.category
        //       let td5=document.createElement("td")
        //     td5.innerText=ele.description
        //       let td6=document.createElement("td")
        //       let img=document.createElement("img")
        //     img.src=ele.image
        //     tr.append(td1,td2,td3,td4,td5,td6)
        //     td6.append(img)
            


        // })





        for(let ele of data){
            let tr =document.createElement("tr")
            table.append(tr)
            let td1=document.createElement("td")
            td1.innerText=ele.id
              let td2=document.createElement("td")
            td2.innerText=ele.title
              let td3=document.createElement("td")
            td3.innerText=ele.price
              let td4=document.createElement("td")
            td4.innerText=ele.category
              let td5=document.createElement("td")
            td5.innerText=ele.description
              let td6=document.createElement("td")
              let img=document.createElement("img")
            img.src=ele.image
            tr.append(td1,td2,td3,td4,td5,td6)
            td6.append(img)
            


        }
    }catch(error){
        console.log("data failed to fetch")
    }
    
}

































// function printData(data){
//     let table =document.createElement("table")
//     let thead =document.createElement("thead")
//     let trhead =document.createElement("tr")
//     let headings=["id","title","price", "description","category","image","button"]
//     headings.forEach(ele=>{
//         let th=document.createElement("th")
//         th.innerText=ele;
//         trhead.appendChild(th)
//     })
// let tbody =document.createElement("tbody")

// data.forEach(obj=>{
//     let tr=document.createElement("tr")
//     for(let key in obj){
//      console.log(key)
//         if(key!=="rating"){
//             let td =document.createElement("td")
//             if (key === "image") {
//             let img = document.createElement("img");
//              img.src = obj[key];
//                 td.appendChild(img);
//                  td.innerHTML = `<img src=${obj[key]}>`
//                 }else{
//                       td.innerText = obj[key];
//                  }
          
//             tr.appendChild(td)
//         }
//     }
//     tbody.appendChild(tr)
// })
// thead.appendChild(trhead)
// table.append(thead,tbody)
// document.body.appendChild(table)
// }
// getData()