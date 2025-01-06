const apiKey = 'c4f86ece00bc8aa272652ac9065af12d';
const url = `https://api.openweathermap.org/data/2.5/weather?q=india&appid=${apiKey}&units=metric`; 

async function _name(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        console.log(result.weather[0].description)
    } catch (error) {
        console.error(error);
    }
}
_name(url)