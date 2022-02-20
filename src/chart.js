export  const getApiWeather = async () =>{
    const API_KEY_WEATHER = 'daa3c03c1253f276d26e4e127c34d058';
    const responseGet = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&lang=ru&appid=daa3c03c1253f276d26e4e127c34d058`)
    const parse = responseGet.json() 
    return parse;
}

