// Giphy variables---------------------
let giphySearch = 'funny';
let giphyApi = 'https://api.giphy.com/v1/gifs/search?api_key=GhVXS7bQb7KRAOWIxDlmvYlFl6yz429i&q=';
let giphyLimtit = '&limit=25&offset=0&rating=G&lang=en';//how many pictures do you want
let giphyLink=giphyApi+giphySearch+giphyLimtit;
let input;
let img;

// Weather variables---------------------
let city = 'seattle';
let weatherKey = '&appid=bbf8dae56c9ac663564111cb255c8a82';
let weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=';
let weatherLink = weatherApi + city +weatherKey;

function setup(){
    // createCanvas(400,200);
    // background(255, 204, 0);
    console.log('works');
    loadJSON(weatherLink,gotWeatherData);
    input = createInput();
    let button = createButton('submit');
    
    button.mousePressed(updateCity);
  
}


function updateCity(){
  console.log(input.value());
  city = input.value();
  weatherLink = weatherApi + city +weatherKey;
  loadJSON(weatherLink,gotWeatherData);
}

function gotWeatherData(data){
    console.log(data.weather[0].main);
    weatherData = data.weather[0].main;
    giphySearch = weatherData;
    giphyLink=giphyApi+giphySearch+giphyLimtit;
    loadJSON(giphyLink,gotGiphyData)
    img.remove();
} 

function gotGiphyData(data){
  
  console.log(data.data[3])
  img=createImg(data.data[5].images.original.url);
  
}

