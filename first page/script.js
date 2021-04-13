//console.log("Hello is this working?")


// load the airtable library, call it "Airtable"
var Airtable = require("airtable");
//console.log(Airtable);

// connect our airtable base to ou website using API key
var base = new Airtable({ apiKey: "keyAPSgVKXfGcLldO" }).base(
    "appv96gKkTRZdbcBQ"
  );


 //get our airtable data, specify how to retrieve it
base("films").select({}).eachPage(gotPageOfFilms, gotAllFilms);

// an empty array to hold our book data
const films = [];

//callback function that receives our data
function gotPageOfFilms(records, fetchNextPage) {
  console.log("gotPageOfFilms()");
  // add the records from this page to our books array
  films.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllFilms(err) {
    console.log("gotAllFilms()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the books
    consoleLogFilms();
    showFilms();
  }

  // just loop through the books and console.log them
function consoleLogFilms() {
    console.log("consoleLogFilms()");
    films.forEach((film) => {
      console.log("Film:", film);
    });
  }

  // loop through airtable data, and display them onto our page
function showFilms() {
    console.log("showFilms()");
    films.forEach(film => {
    
      var filmContainer = document.createElement("div");
    filmContainer.classList.add("film-container");
    document.querySelector(".container").append(filmContainer);


        // add movie titles to page 
         var filmTitle = document.createElement("h1");
         filmTitle.classList.add("film-title");
         filmTitle.innerText = film.fields.film_title;
         filmContainer.append(filmTitle);
    
         var nameOfDirector = document.createElement("p");
         nameOfDirector.classList.add("director");
         nameOfDirector.innerText = film.fields.director;
         filmContainer.append(nameOfDirector);

         var filmImage = document.createElement("img");
        filmImage.classList.add("film-image");
         filmImage.src= film.fields.filmImage[0].url;
        filmContainer.append(filmImage);

        var filmCaption = document.createElement("p");
        filmCaption.classList.add("caption");
        filmCaption.innerText = film.fields.film_caption;
        filmContainer.append(filmCaption);

         filmContainer.addEventListener("click", function(event) {
         filmImage.classList.toggle("active");
         filmCaption.classList.toggle("active");
        });
    
        var filmGenre = film.fields.genre;
        filmGenre.forEach(function(genre) {
          filmContainer.classList.add(genre);
        });

        var filterDrama = document.querySelector(".js-drama");
       filterDrama.addEventListener("click", function() {
      if (filmContainer.classList.contains("Drama")) {
        filmContainer.style.background = "rgb(240, 180, 175)";
      } else {
        filmContainer.style.background = "rgb(190, 54, 54);";
      }
    });

    var filterRomance = document.querySelector(".js-romance");
    filterRomance.addEventListener("click", function() {
      if (filmContainer.classList.contains("Romance")) {
        filmContainer.style.background = "black";
      } else {
        filmContainer.style.background = "rgb(190, 54, 54);";
      }
    });

    var filterAction = document.querySelector(".js-action");
    filterAction.addEventListener("click", function() {
      if (filmContainer.classList.contains("Action")) {
        filmContainer.style.background = "black";
      } else {
        filmContainer.style.background = "rgb(190, 54, 54);";
      }
    });

    var filterComedy = document.querySelector(".js-comedy");
    filterComedy.addEventListener("click", function() {
      if (filmContainer.classList.contains("Comedy")) {
        filmContainer.style.background = "rgb(135, 168, 196);";
      } else {
        filmContainer.style.background = "rgb(190, 54, 54);";
      }
    });

    var filterFantasy = document.querySelector(".js-fantasy");
    filterFantasy.addEventListener("click", function() {
      if (filmContainer.classList.contains("Fantasy")) {
        filmContainer.style.background = "rgb(253, 178, 81);";
      } else {
        filmContainer.style.background = "rgb(190, 54, 54);";
      }
    });

    // filter reset
    var filterReset = document.querySelector(".js-reset");
    filterReset.addEventListener("click", function() {
      filmContainer.style.background = "rgb(190, 54, 54)";
    });

    });
  }
  
  