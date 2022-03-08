var switchPage = function () {
    var userInput = document.getElementById("LOCSearch").value;
    localStorage.setItem('lastSearch', JSON.stringify(userInput));
    document.location.assign('./results-index.html');
};
var searchBtn = document.querySelector('.search-button')
searchBtn.addEventListener('click', switchPage);

//var storeSearch = function () {
    
    
 //   console.log(searchForMe);
  //  document.location.replace('./results-index.html');
    
  //  return searchForMe;
//};

// var apiFetch = function () {
//     var userInput = document.getElementById("LOCSearch").value;
//     localStorage.setItem('lastSearch', JSON.stringify(userInput));
//     document.location.assign('./results-index.html');
//     var searchForMe = JSON.parse(localStorage.getItem('lastSearch'));
   
   
   
//     fetch('https://www.loc.gov/search/?q=' + searchForMe + '&fo=json')

//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             var searchResultsEl = document.querySelector('#search-results');
//             for (let i = 0; i < data.results.length; i++) {
//                 var cardEl = document.createElement('div');
//                 var h3El = document.createElement('h3');
//                 var descEl = document.createElement('p');
//                 h3El.textContent = data.results[i].title;
//                 descEl.textContent = data.results[i].description;
//                 cardEl.appendChild(h3El);
//                 cardEl.appendChild(descEl);
//                 searchResultsEl.append(cardEl);

//                 console.log(data);
//             };
//         })

// };

