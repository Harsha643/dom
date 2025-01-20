
async function fetchData() {
    let response=await fetch("http://localhost:3000/students")
    try{
        if(!response.ok){
            throw new Error(response.statusText)
        }
        let data=await response.json()
        console.log(data)
        displayData(data)
    }catch(error){
        alert("data is fetch to failed")
        console.error(error)
    }
    
}
fetchData()

function displayData(students){
let container =document.getElementById("container")

    students.forEach((student) => {
        // console.log(student.id)
        let item = document.createElement("div");
        item.innerHTML = `
            <p>ID : ${student.id}</p>
            <p>${student.name}</p>
            <button id = 'deleteBtn-${student.id}'>Delete</button>
            <button id = 'editBtn-${student.id}'>Edit</button>
            `
            container.appendChild(item);
        let deleteBtn = document.getElementById(`deleteBtn-${student.id}`);
        let editBtn=document.getElementById(`editBtn-${student.id}`)
      
        deleteBtn.onclick = () => {
            deleteData(student.id);
        }
       editBtn.onclick=()=>{
        // v.stopPropagation()
         editData(student.id)
       }

    })
 

    
};

async function deleteData(studentId) {
// console.log(studentId)
    let response=await fetch(`http://localhost:3000/students/${studentId}`,{"method":"DELETE"})
    try{
        if(!response.ok){
            alert("deleteData function")
            throw new Error("delete function " ,response.statusText)
        }
        alert("deleteData successfully")
      
    }catch(error){
        alert("deletedata is failed")
        console.error(error)
    }

    
}

async function editData(id){
   console.log(id)
    let studentId=document.getElementById("id")
    let name=document.getElementById("name")
    let image=document.getElementById("image")

    let response=await fetch(`http://localhost:3000/students/${id}`)
    try{
        if(!response.ok){
            throw new Error(response.statusText)

        }
        let student=await response.json()

        studentId.value=student.id
        name.value=student.name
        image.value=student.image

    }catch(error){
        alert("editData data error")
        console.log(error)
    }

}


async function saveData() {
    
    let studentId=document.getElementById("id").value
    let name=document.getElementById("name").value
    let image=document.getElementById("image").value
    

    let obj={
        "name":name,
        "image":image
    }
    let  method=studentId?"PUT":"POST"
    let URL=studentId?`http://localhost:3000/students/${studentId}`:"http://localhost:3000/students"


    let response=await fetch(URL,{
        method,
        "headers":{
            "content-type":"application/json"
           
        },
        "body":JSON.stringify(obj)
    })
    try{
        if(!response.ok){
            throw new Error(response.statusText)
        }
        alert("data updated successfully")
     
        fetchData()

    }catch(error){
        console.error(error)
    }


}


