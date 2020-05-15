function toggleMenu() {
   console.log(document.getElementById("primaryNav").classList);
   document.getElementById("primaryNav").classList.toggle("hide");
}

let d = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("currentDate").innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();