//Get the day to display the pancakes in the park
let dayOfWeek = d.getDay();
if(dayOfWeek == 5) {
   document.getElementById("pancakes").style.display = "block";
}

else {
   document.getElementById("pancakes").style.display = "none";
}