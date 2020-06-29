function toggleMenu() {
   console.log(document.getElementById("primaryNav").classList);
   document.getElementById("primaryNav").classList.toggle("hide");
}

let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Get the today's date for the bottom of the page
document.getElementById("currentDate").innerHTML = day[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

//Get the day to display the pancakes in the park
let dayOfWeek = d.getDay();
if(dayOfWeek == 5) {
   document.getElementById("pancakes").style.display = "block";
}

else {
   document.getElementById("pancakes").style.display = "none";
}

//GOOGLE FONTS
WebFont.load({google: {families: ["Quicksand", "Righteous"]}});


//Storm Center Rating
function adjustRating(rating) {
   document.getElementById("ratingvalue").innerHTML = rating;
}