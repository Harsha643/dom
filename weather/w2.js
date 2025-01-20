function getdata(){
    let city=document.getElementById("cityName")
	// et loader=document.getElementById("loader")
	// loader.style.display="none"l
    // console.log(city.value)
    showWeather(city.value)

}



function display(result){
	let loader=document.getElementById("loader")
	loader.style.display="none"
    let item = document.getElementById("showData")
    item.innerHTML=`
    <p>city :${result.name}</p>
    <p>temp :${result.main.temp}</p>
	<p>humidity :${result.main.humidity}</p>
	<p>wind-speed:${result.wind.speed}</p>
	<p>pressure :${result.main.pressure}</p>

    `
}

async function showWeather(city) {
const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3df3d58a54mshe05d96bea789ba6p1c98bbjsnd752b0316b87',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};
	let loader=document.getElementById("loader")
	loader.style.display="block"
try {
	const response = await fetch(url, options);
	const result = await response.json();
	display(result)
} catch (error) {
	alert("data fetch to failed")
}
}
