

async function  _name() {

    try{
        let res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        if(!res.ok){
            throw new Error("data is not found")
        }
        let data=await res.json()
        // console.log(data)
        display(data.meals)
        // console.log(data.meals[0].strMealThumb)
    }catch(err){
        alert("fetch to failed")
        console.log(err)
    }
    
}
_name()



function display(data){
   let maincontainer=document.getElementById("maincontainer")
//    maincontainer.className="maincontainer"
maincontainer.innerHTML=""
data.forEach(element => {

    // console.log(element)
    let item=document.createElement("div")
    item.className="container"
      
    item.innerHTML=`
        <img src="${element.strMealThumb}" width="300px"/>
        <p>${element.strIngredient1}        :${element.strMeasure1}</p>
         <p>${element.strIngredient2}       :${element.strMeasure2}</p>
          <p>${element.strIngredient3}      :${element.strMeasure3}</p>
          <p>${element.strIngredient4}      :${element.strMeasure4}</p>
          <p>${element.strIngredient5}      :${element.strMeasure5}</p>
          <p>${element.strIngredient6}      :${element.strMeasure6}</p>
          <p>${element.strIngredient7}      :${element.strMeasure7}</p>
          <p>${element.strIngredient8}      :${element.strMeasure8}</p>
          <p>${element.strIngredient9}      :${element.strMeasure9}</p>
          <p>${element.strIngredient10}     :${element.strMeasure10}</p>
          <p>${element.strIngredient11}     :${element.strMeasure11}</p>
          <p>${element.strIngredient12}     :${element.strMeasure12}</p>

            <p  id="des-${element.strMeal}">${element.strInstructions}</p>
            
        <button id='btn-${element.strMeal}'>Instructions</button>
    <button id='utube-${element.strMeal}'>YouTube</button>
    `

    maincontainer.appendChild(item)


let des=document.getElementById(`des-${element.strMeal}`)

// des.style.display="none"
// console.log(des)
if(des){
    des.style.display="none"

    let desBtn=document.getElementById(`btn-${element.strMeal}`)
    
        if(desBtn){
            desBtn.addEventListener("click",()=>{
            des.style.display="block"
        })
        }
    } 
// }else if(desBtn){
//     des.style.display="block"

//     let desBtn=document.getElementById(`btn-${element.strMeal}`)
   
//         desBtn.addEventListener("dbclick",()=>{
//         des.style.display="none"
//     })
//     }
    else{
    console.log("des data is not found")
}


  
      
})
// document.body.appendChild(maincontainer)

}



// // function displayBtn(id){
// // // console.log(id)
// // localStorage.setItem("foodie",JSON.stringify( {id}));
// // window.location.href = "./ind.html";
// // }
