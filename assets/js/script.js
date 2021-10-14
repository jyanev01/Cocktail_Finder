fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')




fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(Response => Response.json())
.then (data => {
    var mealTitle = data.meals.strMeal;

    mealTitle.innerHTML = mealTitle;
});

function myFunction () {
  var searchValue = document.querySelector("#searchTerm").value;
  fetch ('https://api.giphy.com/v1/gifs/search?q='+searchValue+'&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&limit=1')

    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    console.log(response.data[0]);

  // Create a variable that will select the <div> where the GIF will be displayed
  // YOUR CODE HERE
    var displayGifContainerEl = document.querySelector("#response-container");

  // Empty out the <div> before we append a GIF to it
  // YOUR CODE HERE
    displayGifContainerEl.innerHTML="";

  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  // Append 'gifImg' to the <div>
  // YOUR CODE HERE
  //
  displayGifContainerEl.appendChild(gifImg);

  });}
