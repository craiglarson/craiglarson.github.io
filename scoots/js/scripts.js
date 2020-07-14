function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('hide');
}
//GOOGLE FONTS
WebFont.load({google: {families: ["Seaweed Script", "Architects Daughter", "Roboto"]}});

let d = new Date();
let months = ["January", "February", "March", "Arpil", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//Footer Date
document.getElementById("footerDate").innerHTML = `${day[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

//Last Modified
document.getElementById("footerModified").innerHTML = document.lastModified;