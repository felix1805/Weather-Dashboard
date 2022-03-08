var key = a12e022cb62b59c204d6c4c7065d99c2
var cities = $["cities"];
var city = [];

function storedCit () {
var cityStorage = JSON.parse(localStorage.getItem('city'));
if (cityStorage != NaN){
    city = cityStorage;
}
//displayCity();
//storedCit();

}

function localStorageCities(){
    localStorage.setItem('city', JSON.stringify(city));
}

function displayCity(){
    cities.innerHTML = '';
    for (let i = 0; i < city.length; i++) {
        var cityindex = city[i];

        var li = $('<li>').text(cityindex);
        cities.prepend(li);
        li.attr('cityinfo', cityindex);
        li.attr('class', "list-group-item");
        li.attr('id','citylist');
        
    }
    if (!cityindex){
        return
    } else{
        weatherInfo(cityindex)
    };
}

$('#querycity').on('click', function(event) {
    event.preventDefault();
    var cityindex = $('#cityid').val().trim();
    city.push(cityindex);

    localStorageCities();
    displayCity();

})

function weatherInfo(cityId2){
    var qURL = "https://api.openweathermap.org/data/2.5/weather?q=" +cityName+ "&appid=" + key;

    $('#currentweather').empty();
    $.ajax({
        url: qURL,
    })
    

}