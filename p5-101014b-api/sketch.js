let batman={
  'color':0,
  'size':20
  
}

let search='yes';
let weatherkey='bbf8dae56c9ac663564111cb255c8a82';
let city='brooklyn';

let api='https://api.giphy.com/v1/gifs/search?api_key=GhVXS7bQb7KRAOWIxDlmvYlFl6yz429i&q='+search+'&limit=25&offset=0&rating=G&lang=en';

let weatherapi='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+weatherkey;


function setup() {
  noCanvas();
  loadJSON(weatherapi,gotData);
  
}

function draw() {
  background(0);
  // image(img, 0, 0);
}


function gotData(weather){
  
  console.log(weather);
}