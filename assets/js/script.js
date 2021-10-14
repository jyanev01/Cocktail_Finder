var searchValue = document.querySelector(".form-input");
var cocktailName = document.querySelector(".cocktailName");
var button = document.querySelector(".button-primary");
var cocktailImg = document.querySelector(".imgClass");
var mealBoxID = document.getElementById('mealBoxID');
var mealName = document.querySelector('.mealName');
var imgDrink = document.querySelector('.imgDrink');
var mealInstructions = document.querySelector('.mealInstructions');
var drinkInstructions = document.querySelector('.drinkInstructions');
var mealIngredrients = document.querySelector('.mealIngredients')


  button.addEventListener('click', function (event) {
    event.preventDefault();
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchValue.value)
      .then(Response => Response.json())
      .then(data => {

        //displays all liquor type drink data
        console.log(data);

        //picks a random drink from array of drink types
        let drinkApiArray = data.drinks;
        let n = [Math.floor(Math.random()*drinkApiArray.length)];
        console.log(n);
        var drinkRandom = data.drinks[n].strDrink;

        //displays drink data on the app
        cocktailName.innerHTML = drinkRandom;
        
        var drinkDivEl = document.querySelector('#drink-container');
        drinkDivEl.innerHTML = "";
        var drinkImg = document.createElement('img');
        drinkImg.setAttribute('src', data.drinks[n].strDrinkThumb);
        drinkDivEl.appendChild(drinkImg)

        findDrinkRecipe(drinkRandom);
      })


   
   //fetch random meal and display
   
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
      

        //pull information from API
      var mealNameValue = (data.meals[0].strMeal);
      console.log(mealNameValue);

      var displayMealContainerEl = document.querySelector("#meal-container");

            //empty div before appending image
            displayMealContainerEl.innerHTML="";
    
          var mealImg = document.createElement('img');
          mealImg.setAttribute('src', data.meals[0].strMealThumb);
    
          displayMealContainerEl.appendChild(mealImg);


      var mealInstructionsValue = (data.meals[0].strInstructions);
      
      //display info from API on screen
      mealName.innerHTML =  mealNameValue;
      mealInstructions.innerHTML = "Instructions: " + mealInstructionsValue;

  })

  function findDrinkRecipe(drinkRandom) {
    drinkRandom = drinkRandom.split(" ").join("+").toLowerCase();
    console.log(drinkRandom);

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkRandom)
    .then(response => response.json()) 
    .then(data => {
      console.log(data)
      var drinkInstruction = (data.drinks[0].strInstructions);
      console.log(drinkInstruction);
      drinkInstructions.innerHTML = drinkInstruction;
    })
  }


});


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
