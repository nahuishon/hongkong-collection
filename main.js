// define our first variable
//when someone clicks on the red circle, we want the background to turn red


// define our first variable

document.getElementById("demo").innerHTML = "My Favorite Korean Movie";

//FIRST IMFORMATION

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("detail").innerHTML = "PARASITE / BONG JOON-HO / The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.";
  })

  //SECOND IMFORMATION
  document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("detail2").innerHTML = "Memories of Murder/ BONG JOON-HO / A big-city detective helps two inept small-town cops investigate a serial killer.";
  })

  //LAST IMFORMATION
  document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("detail3").innerHTML = "Ode to My Father / BONG JOON-HO / Separated during wartime in North Korea, a man desperately longs to reunite with his missing father and sister.";
  })

  //SECNOND IMAGE START 
  
  let newch = document.querySelector(".newch");

  //the word halfway
  let increaseNewchImage = document.querySelector('.new-poster');
  
  increaseNewchImage.addEventListener("mouseover",function(){
    newch.classList.add("active");
  });
  
  increaseNewchImage.addEventListener("mouseout",function(){
      newch.classList.remove("active");
  });

  

  //second image
 
  let two = document.querySelector(".two");

  //the word halfway
  let increaseTwoImage = document.querySelector('.second-poster');
  
  increaseTwoImage.addEventListener("mouseover",function(){
    two.classList.add("active");
  });
  
  increaseTwoImage.addEventListener("mouseout",function(){
      two.classList.remove("active");
  });


  // last image 
  let last = document.querySelector(".last");

  let increaseLastImage = document.querySelector('.last-poster');
  
  increaseLastImage.addEventListener("mouseover",function(){
    last.classList.add("active");
  });
  
  increaseLastImage.addEventListener("mouseout",function(){
      last.classList.remove("active");
  });