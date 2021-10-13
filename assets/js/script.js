function mealFunction () {  
    fetch ('https://www.themealdb.com/api/json/v1/1/random.php')
  
      .then(function(response) {
      return response.json();
      })
      .then(function(response) {
      console.log(response);
  
      var displayMealContainerEl = document.querySelector("#mealBoxID");
  
      //empty div before appending image
      displayMealContainerEl.innerHTML="";
  
    var mealImg = document.createElement('img');
    mealImg.setAttribute('src', response.strMealThumb);

    displayMealContainerEl.appendChild(mealImg);
  
    });}

function drinkFunction () {
    var searchValue = document.querySelector("#searchButton").value;
      
        fetch ('www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchValue)
      
          .then(function(response) {
          return response.json();
          })
          .then(function(response) {
          console.log(response);

        //select one response from Drink API array 
        let drinkApiArray = response;
        let drink = drinkApiArray[Math.floor(Math.random()*drinkApiArray.length)];
      
        // Create a variable that will select the <div> where the GIF will be displayed
        // YOUR CODE HERE
          var displayDrinkContainerEl = document.querySelector("#drinkBoxID");
      
        // Empty out the <div> before we append a GIF to it
        // YOUR CODE HERE
          displayDrinkContainerEl.innerHTML="";
      
        var drinkImg = document.createElement('img');
        drinkImg.setAttribute('src', response.strDrinkThumb);
        // Append 'gifImg' to the <div>
        // YOUR CODE HERE
        //
        displayDrinkContainerEl.appendChild(drinkImg);
      
        });}

searchButton.onclick = mealFunction();
searchButton.onclick = drinkFunction();



