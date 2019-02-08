fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=cd4d1f71ff2effb7b9e6eb7964b1cc43&language=en-US&page=1"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var resultArray = myJson.results;
    console.log(myJson);
    console.log(resultArray[0].title);
    console.log(
      `Poster path ${"http://image.tmdb.org/t/p/w500" +
        resultArray[0].poster_path}`
    );

    for (var i = 0; i <= resultArray.length; i++) {
      var p_div = document.getElementById("par");
      var new_element = document.createElement("div");
      var image = document.createElement("img");
      image.src = "http://image.tmdb.org/t/p/w500" + resultArray[i].poster_path;
      image.height = "370";
      image.width = "370";
      new_element.setAttribute("class", "grid-item");
      new_element.appendChild(image);
      p_div.appendChild(new_element);
    }
  })
  .catch(function(err) {
    console.log(err);
  });
