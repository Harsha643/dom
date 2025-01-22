

async function _name() {
    try {
      let res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Dessert");
      if (!res.ok) {
        throw new Error("data is not found");
      }
      let data = await res.json();
      display(data.meals);
    } catch (err) {
      alert("fetch failed");
      console.log(err);
    }
  }
  _name();
  
  function display(data) {
    let maincontainer = document.getElementById("maincontainer");
    maincontainer.innerHTML = "";
    
    data.forEach((element) => {
      let item = document.createElement("div");
      item.className = "container";
  
      item.innerHTML = `
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
  
        <p id="des-${element.strMeal}">${element.strInstructions}</p>
        <iframe 
            id="utube-${element.strMeal}" 
            width="320" 
            height="240" 
            src="${element.strYoutube.replace("watch?v=", "embed/")}" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
        <button id='btn-des-${element.strMeal}'>Instructions</button>
        <button id='btn-utube-${element.strMeal}'>YouTube</button>
      `;
  
      maincontainer.appendChild(item);
  
      let des = document.getElementById(`des-${element.strMeal}`);
      let utube = document.getElementById(`utube-${element.strMeal}`);
      let utubeBtn = document.getElementById(`btn-utube-${element.strMeal}`);
      let desBtn = document.getElementById(`btn-des-${element.strMeal}`);
  
      if (des) des.style.display = "none";
      if (utube) utube.style.display = "none";
  
   
      if (desBtn) {
        desBtn.addEventListener("click", () => {
          des.style.display = des.style.display === "none" ? "block" : "none";
        });
      }
  

      if (utubeBtn) {
        utubeBtn.addEventListener("dbclick", () => {
          utube.style.display = "block";
        });
  
        utubeBtn.addEventListener("lclick", () => {
          utube.style.display = "none";
        });
      }
    });
  }
  
