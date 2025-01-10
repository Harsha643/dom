

async function  _name() {

    try{
        let res=await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
        if(!res.ok){
            throw new Error("data is not found")
        }
        let data=await res.json()
        display(data.meals)
        // console.log(data.meals[0].strMealThumb)
    }catch(err){
        alert("fetch to failed")
    }
    
}
_name()

function display(data){
   
data.forEach(element => {
    let item=document.getElementsByClassName("container")
    // console.log(element.strMealThumb)
    for(let key in element){
        console.log(element[key])
        if(key==strMealThumb){
            console.log(element[key])
        //  let img=document.createElement("img")
        //  img.src=element.strMealThumb
        //  console.log(element[key])
        }
        
     }
    document.body.appendChild(item)
    
});

}