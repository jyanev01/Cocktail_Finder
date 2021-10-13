var searchValue = document.querySelector(".form-input");
var cocktailName = document.querySelector(".cocktailName");
var button = document.querySelector(".button-primary");
var cocktailImg = document.querySelector(".imgClass");
var mealBoxID = document.getElementById('mealBoxID');
var mealName = document.querySelector('.mealName');
var imgDrink = document.querySelector('.imgDrink');

// function mealFunction() {
//   fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then(res => res.json())
//     .then(res => {
//       createMeal(res.meals[0])

//     })
  // function mealFunction () {  
  //     fetch ('https://www.themealdb.com/api/json/v1/1/random.php')

  //       .then(function(response) {
  //       return response.json();
  //       })
  //       .then(function(response) {
  //       console.log(response);

  //       var displayMealContainerEl = document.querySelector("#mealBoxID");

  //       //empty div before appending image
  //       displayMealContainerEl.innerHTML="";

  //     var mealImg = document.createElement('img');
  //     mealImg.setAttribute('src', response.strMealThumb);

  //     displayMealContainerEl.appendChild(mealImg);

  //     });}

  button.addEventListener('click', function (event) {
    event.preventDefault();
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchValue.value)
      .then(Response => Response.json())
      .then(data => {

        //displays all liquor type drink data
        console.log(data);

        //picks a random drink from array of drink types
        let drinkApiArray = data.drinks;
        let drinkRandom = drinkApiArray[Math.floor(Math.random()*drinkApiArray.length)].strDrink;
        console.log(drinkRandom);

        //displays drink data on the app
        cocktailName.innerHTML = "Your Cocktail is a: " + drinkRandom;
        var drinkDivEl = document.querySelector('#drink-container');
        drinkDivEl.innerHTML = "";
        var drinkImg = document.createElement('img');
        drinkImg.setAttribute('src',);
        drinkDivEl.appendChild(drinkImg)

      })

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName)
      .then(Response => Response.json())
      .then(data => {
        console.log(cocktailName)
        var drinkInstructions = (data.drinks.strInstructions);
        console.log(drinkInstructions);
      })

   
   //fetch random meal and display
   
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
      
        //pull information from API
      var mealNameValue = (data.meals[0].strMeal);
      console.log(mealNameValue)

      
      //display info from API on screen
      mealName.innerHTML = "Your Meal is: " + mealNameValue;



    })

  });


  // function drinkFunction () {

  //         fetch ('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchValue.value)

  //           .then(function(response) {
  //           return response.json();
  //           })
  //           .then(function(response) {
  //           console.log(response);
  //           console.log(searchValue.value);
  //         //select one response from Drink API array 
  //         let drinkApiArray = response;
  //         let drink = drinkApiArray[Math.floor(Math.random()*drinkApiArray.length)];
  //         console.log(drink);

  //         // Create a variable that will select the <div> where the GIF will be displayed
  //         // YOUR CODE HERE
  //           var displayDrinkContainerEl = document.querySelector("#drinkBoxID");

  //         // Empty out the <div> before we append a GIF to it
  //         // YOUR CODE HERE
  //           displayDrinkContainerEl.innerHTML="";

  //         var drinkImg = document.createElement('img');
  //         drinkImg.setAttribute('src', response.strDrinkThumb);
  //         // Append 'gifImg' to the <div>
  //         // YOUR CODE HERE
  //         //
  //         displayDrinkContainerEl.appendChild(drinkImg);

  //         });}





