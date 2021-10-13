
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
    mealImg.setAttribute('src', response.meals.strMealThumb);

    displayMealContainerEl.appendChild(mealImg);
  
    });}

searchButton.onclick = mealFunction();


