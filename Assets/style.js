//Base Js  script
//Click event for the search button 
var seachEl = document.getElementById("search-results");
var cityInputEl = document.querySelector('#city');
cityname = " ";
$(".sBtn").on("click",function(){
    cityname = $("#city").val();
    var cityLi = document.createElement('li')
    cityLi.textContent = cityname;

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
});
        
    });
       



 
    //var cityname = cityInputEl.value;
    
    

})