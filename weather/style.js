// // const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';
// // const url = `https://api.openweathermap.org/data/2.5/weather?q=india&appid=${apiKey}&units=metric`; 

// // async function _name(url) {
// //     try {
// //         const response = await fetch(url);
// //         const result = await response.json();
// //         console.log(result);
// //         console.log(result.weather[0].description)
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }
// // _name(url)



// // const url = `https://open-weather13.p.rapidapi.com/city/pune/EN`;
// // const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'x-rapidapi-key': 'ae42d6fe5bmshc4c1462b3b6aa15p1b7dffjsn266ee5e64111',
// // 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// // 	}
// // };
// // async function _name() {
    
// // try {
// // 	const response = await fetch(url, options);
// // 	const result = await response.json();
// // 	console.log(result);
// // } catch (error) {
// // 	console.error(error);
// // }
// // }
// // _name()


// let cityname=prompt("enter city name")
// const url = `https://open-weather13.p.rapidapi.com/city/${cityname}/EN`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'ae42d6fe5bmshc4c1462b3b6aa15p1b7dffjsn266ee5e64111',
// 		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
// 	}
// };



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
