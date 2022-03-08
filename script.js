var searchLOC = function () {
    document.querySelector('#search-results');
};


var apiFetch = function () {
    var userInput = document.getElementById("LOCSearch").value;
    localStorage.setItem('lastSearch', JSON.stringify(userInput));
    document.location.replace('./results-index.html');

    var searchForMe = JSON.parse(localStorage.getItem('lastSearch'));

    fetch('https://www.loc.gov/search/?q=' + searchForMe + '&fo=json')
    
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var searchResultsEl = document.querySelector('#search-results');
            for (let i = 0; i < data.results.length; i++) {
                var cardEl = document.createElement('div');
                var h3El = document.createElement('h3');
                var descEl = document.createElement('p');
                h3El.textContent = data.results[i].title;
                descEl.textContent = data.results[i].description[0];
                cardEl.appendChild(h3El);
                cardEl.appendChild(descEl);
                searchResultsEl.append(cardEl);

                console.log(data);
            };
        })
    
};

var searchBtn = document.querySelector('.search-button')
searchBtn.addEventListener('click', apiFetch);

var previousPage = function () {
    window.location.replace()
};

var goBack = function(){
    var backBtn = document.getElementById('.back-button')
}
