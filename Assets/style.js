//Base Js  script
//Click event for the search button 
var seachEl = document.getElementById("search-results");
var cityInputEl = document.querySelector('#city');
var currentEl = document.getElementById("current-day");


var cityname = " ";


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
    console.log(data.list[0]);

    wIcon = data.list[0].weather[0].icon;
    console.log(wIcon);
    var imgIcon = document.createElement('img')
    imgIcon.setAttribute("src", "http://openweathermap.org/img/wn/"+wIcon+".png");
    

    var currentTittleEl = document.createElement('ul')
    currentTittleEl.setAttribute("style","font-size: 50px;font-weight: bold")
    currentTittleEl.textContent = cityname;
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
});
        
    });
       



 
    //var cityname = cityInputEl.value;
    
    

})