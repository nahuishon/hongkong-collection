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
const Films = [];

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
    films.forEach((Films) => {
      console.log("films:", films);
    });
  }

  // loop through airtable data, and display them onto our page
function showFilms() {
    console.log("showFilms()");
    films.forEach((films) => {
    

        // add movie titles to page 
         var movieName = document.createElement("h1");
         movieName.innerText = movie.fields.movie_name;
         document.body.appendChild(movieName);
    
         //add notes name to page
         var movieNotes = document.createElement("p");
         movieNotes.innerText = movie.fields.notes;
         document.body.appendChild(movieNotes);


         // adding artist image to page
         var movieImage = document.createElement("img");
         movieImage.src = movie.fields.movie_image[0].url;
         document.body.appendChild(movieImage);


    });
  }
  
  