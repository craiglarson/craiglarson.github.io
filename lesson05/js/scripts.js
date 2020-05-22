function toggleMenu() {
   console.log(document.getElementById("primaryNav").classList);
   document.getElementById("primaryNav").classList.toggle("hide");
}

let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Get the today's date for the bottom of the page
document.getElementById("currentDate").innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

//Get the day to display the pancakes in the park
let day = d.getDay();
if(day == 5) {
   document.getElementById("pancakes").style.display = "block";
}

else {
   document.getElementById("pancakes").style.display = "none";
}