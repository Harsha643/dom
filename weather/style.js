
let cityname=prompt("enter the city name")
const url = `https://open-weather13.p.rapidapi.com/city/${cityname}/EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f7618c8026mshbf94191e95507e3p1b0c78jsn6be4a7b0eb13',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};



async function _name() {

try {
	const response = await fetch(url, options);
	const result = await response.json();
	weather(result)
} catch (error) {
	console.error(error);
}
}
_name()
function weather(result){
	let div1=document.createElement("div")
	div1.className="container"
	div1.style.background="black"
	div1.style.width="200px"
	div1.style.border="2px solid red"
	div1.style.color="white"
	div1.style.padding="20px"
	
let para=document.createElement("p")
para.innerText=`temperature : ${result.main.temp}`


let para1=document.createElement("p")
para1.innerText=`humidity :${result.main.humidity}`


let para2=document.createElement("p")
para2.innerText=`speed:${result.wind.speed}`


let para3=document.createElement("p")
para3.innerText=`city name : ${result.name}`


let para4=document.createElement("p")
para4.innerText=`pressure :${result.main.pressure}`

document.body.append(div1)
div1.append(para,para1,para2,para3,para4)

}
