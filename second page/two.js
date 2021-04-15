console.log("Hello");

var Airtable = require("airtable");
//console.log(Airtable);

// use the airtable librar to get a variable that represents one of our bases
var base = new Airtable({ apiKey: "keyAPSgVKXfGcLldO" }).base(
    "appv96gKkTRZdbcBQ"
  );


//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("films").select({}).eachPage(gotPageOfFilms, gotAllFilms);

// an empty array to hold our book data
const films = [];

// callback function that receives our data
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
    console.log("error loading films");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogFilms();
  try {
   showFilms();
  } catch(e){
   console.log(e);
  }
}

// just loop through the books and console.log them
function consoleLogFilms() {
  console.log("consoleLogFilms()");
  films.forEach((film) => {
    console.log("Film:", film);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showFilms() {
  console.log("showFilms()");
  films.forEach((film) => {
    var filmYear = film.fields.filmYear;
       
    if (filmYear == 'foursix') {
          // display filmimages
        
          var filmImage = document.createElement("img");
          filmImage.classList.add('foursix-image');
          filmImage.src =  film.fields.filmImage[0].url;
          document.querySelector(".foursix-container").appendChild(filmImage);

      
           
              };
            }
            )};
        