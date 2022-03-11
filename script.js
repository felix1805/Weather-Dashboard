var key = "a12e022cb62b59c204d6c4c7065d99c2";
var cities = $("cities");
var city = [];
var currentDate = moment().format('MMM Do');
var displayDateEl = document.getElementById('currentDate')
storedCit();

function storedCit() {
    var cityStorage = JSON.parse(localStorage.getItem('city'));
    if (cityStorage !== null) {
        city = cityStorage;
    }
   

}

function localStorageCities() {
    localStorage.setItem('city', JSON.stringify(city));
}

function displayCity() {
    cities.innerHTML = '';
    for (let i = 0; i < city.length; i++) {
        var cityindex = city[i];
        
        var li = $('<li>').text(cityindex);
        cities.prepend(li);
        li.attr('cityinfo', cityindex);
        li.attr('class', "list-group-item");
    
    }
    if (!cityindex) {
        return
    } else {
        weatherInformation(cityindex)
    };
}

$('#querycity').on('click', function (event) {
    event.preventDefault();
    var cityindex = $('#cityid').val().trim();
    city.push(cityindex);
    
    localStorageCities();
    displayCity();

});

function weatherInformation(cityId2) {
    var qURL = 
    "https://api.openweathermap.org/data/2.5/weather?q=" 
    + cityId2 
    + "&appid=" 
    + key
    + '&units=imperial';

    $('#currentweather').empty();
    $.ajax({
        url: qURL
    })
        .then(function (wInformation) {
            var tempFormula = parseInt((wInformation.main.temp));
            var tempCity = $("<p>").text("Temperature: " + tempFormula + " °F");
            var humCity = $("<p>").text("Humidity: " + wInformation.main.humidity + " %");
            var wsCity = $("<p>").text("Wind Speed: " + wInformation.wind.speed + " mph");
            cityDesc = $('<h3>').text(wInformation.name + " " + currentDate);
            $('#currentweather').append(tempCity);
            $('#currentweather').append(humCity);
            $('#currentweather').append(wsCity);
            $('#currentweather').append(cityDesc);

            var qURL5day = 
            "https://api.openweathermap.org/data/2.5/forecast?q=" 
            + cityId2 
            + "&appid=" 
            + key 
            + '&units=imperial';
            $.ajax({
                url:qURL5day
            })
            .then(function(wInformation5) {
                $('#elements').empty();
                for (let i = 0, o = 0; i=i+7; o<=0) {
                    var collectDate = wInformation5.list[i].dt;
                    if(wInformation5.list[i].dt !== wInformation5.list[i+1].dt){
                        var wInformationCard = $('<div>');
                        wInformationCard.attr('class', 'col-5 m-3 bg-secondary text-white')
                        var newDate = new Date(0);
                        newDate.setUTCSeconds(collectDate);
                        var currentDate = newDate
                        var currentDay = currentDate.getDate();
                        var currentMonth = currentDate.getMonth()+1;
                        var dateInformation = currentDate.getFullYear() + '-' + currentMonth + '-' + currentDay;
                        var finalOutputDay = $('<h3>').text(dateInformation);
                        var tempInF = wInformation5.list[i].main.temp;
                        var numericTemp = parseInt((tempInF));
                        var currentTemp = $('<p>').text('Current Temp: ' +numericTemp+ "°F");
                        var currentHumidity = $('<p>').text('Current Humidity:' +wInformation5.list[i].main.humidity+ "%");
                        wInformationCard.append(finalOutputDay);
                        wInformationCard.append(currentTemp);
                        wInformationCard.append(currentHumidity);
                        $('#elements').append(wInformationCard);

                    }

                    
                }
            })
        


        })


}
function displayDate() {
    var today = document.createElement('p');
    today.setAttribute('id', 'currentDate')
    today.textContent = 'Today\'s Date is: ' + currentDate
    displayDateEl.appendChild(today);
    console.log(currentDate);
}

displayDate();
