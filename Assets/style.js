//Base Js  script
//Click event for the search button 
var seachEl = document.getElementById("search-results");
var cityInputEl = document.querySelector('#city');
var currentEl = document.getElementById("current-day");
var forcastEl = document.getElementById("five-day");


var cityname = " ";
var current = moment()
var eCurrentDay = document.createElement('currentDay');
eCurrentDay = current.format('L');
var timeLi = document.createElement('ul')
timeLi.textContent = eCurrentDay;

$(".sBtn").on("click",function(){
    cityname = $("#city").val();
    var cityLi = document.createElement('li')
    cityLi.textContent = cityname;
    currentEl.textContent =" ";

   

    console.log(cityname);
    seachEl.append(cityLi);


    var cityUrl = "https://api.openweathermap.org/geo/1.0/direct?q="+ cityname +"&limit=1&appid=42e4ffde5b6f2290cc63f3d012c4076c";
    fetch(cityUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data[0]);
       
    
        var citylat = data[0].lat;
        console.log(citylat);
        var citylon = data[0].lon;
        console.log(citylon);

        var requestUrl ="https://api.openweathermap.org/data/2.5/forecast?lat=" + data[0].lat+ "&lon="+data[0].lon + "&appid=42e4ffde5b6f2290cc63f3d012c4076c";

fetch(requestUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.list);

    wIcon = data.list[7].weather[0].icon;
    currentEl.setAttribute("style","border-style: solid");

    //This is the start of the code to get the current weather for the current day
    console.log(wIcon);
    var imgIcon = document.createElement('img')
    imgIcon.setAttribute("src", "http://openweathermap.org/img/wn/"+wIcon+".png");
    

    var currentTittleEl = document.createElement('ul')
    currentTittleEl.setAttribute("style","font-size: 30px;font-weight: bold")
    currentTittleEl.textContent = cityname +" ("+eCurrentDay+")";
    // currentTittleEl.append(timeLi);
    currentTittleEl.append(imgIcon);
    currentEl.append(currentTittleEl);

    var cityTemp = data.list[0].main.temp;
    console.log(cityTemp);

    var cityTempLi = document.createElement('ul')
    cityTemp = 1.8*(cityTemp - 273.15)+32;
    cityTempLi.textContent = Math.round(cityTemp)+'\u00b0'+"F";
    currentEl.append(cityTempLi);

 
    var cityHum = data.list[0].main.humidity;
    console.log(cityHum);

    var cityHumLi = document.createElement('ul')
    cityHumLi.textContent = cityHum+"%";
    currentEl.append(cityHumLi);

    var cityWind = data.list[0].wind.speed;
    console.log(cityWind)

    var cityWindLi = document.createElement('ul')
    cityWindLi.textContent = cityWind +"mph";
    currentEl.append(cityWindLi);

    forcastEl.textContent=" ";

    for(var i=7;i < data.list.length; i+=8){
        console.log(data.list[i]);
       

    
forcastId=document.createElement("container");
forcastId.setAttribute("class","fiveForcast")
forcastEl.append(forcastId);
    //This is the start of the code to get the current weather for the current day
    var timeC = data.list[i].dt_txt
    var timeCLi = document.createElement('ul')
    timeCLi.setAttribute("style","font-weight:bold")
    timeC = moment(data.list[i].dt_txt).format('L');
    timeCLi.textContent=timeC
    forcastId.append(timeCLi);

    wIcon = data.list[i].weather[0].icon;
    console.log(wIcon);
    var imgIcon = document.createElement('img')
    imgIcon.setAttribute("src", "http://openweathermap.org/img/wn/"+wIcon+".png");
    

    var currentTittleEl = document.createElement('ul')
    // currentTittleEl.setAttribute("style","font-size: 50px;font-weight: bold")
    // currentTittleEl.textContent = cityname;
    currentTittleEl.append(imgIcon);
    forcastId.append(currentTittleEl);

    var cityTemp = data.list[i].main.temp;
    console.log(cityTemp);

    var cityTempLi = document.createElement('ul')
    cityTemp = 1.8*(cityTemp - 273.15)+32;
    cityTempLi.textContent = Math.round(cityTemp)+'\u00b0'+"F";
    forcastId.append(cityTempLi);

 
    var cityHum = data.list[0].main.humidity;
    console.log(cityHum);

    var cityHumLi = document.createElement('ul')
    cityHumLi.textContent = cityHum+"%";
    forcastId.append(cityHumLi);

    var cityWind = data.list[0].wind.speed;
    console.log(cityWind)

    var cityWindLi = document.createElement('ul')
    cityWindLi.textContent = cityWind +"mph";
    forcastId.append(cityWindLi);
    }
});
        
    });
       



 
    //var cityname = cityInputEl.value;
    
    

})