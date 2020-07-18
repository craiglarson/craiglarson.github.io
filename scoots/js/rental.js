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


//RENTAL INFORMATION JSON
const rentalURL ='https://craiglarson.github.io/scoots/js/rentals.json';

fetch(rentalURL)
    .then((response) => response.json())
    .then((jsObject) => {
    const rentals = jsObject['rentals'];
    for (let i = 0; i < rentals.length; i++) {
        let rentalCard = document.createElement('div');
        rentalCard.setAttribute('class', 'rentalType-card');
        let rentalType = document.createElement('h3');
        let image = document.createElement('img');
        let table = document.createElement('table');
        let tableRow0 = document.createElement('tr');
        let infoHeader = document.createElement('th');
        infoHeader.setAttribute('colspan', '2');
        infoHeader.setAttribute('class', 'mainHeader')
        let tableRow1 = document.createElement('tr');
        let maxPersonHeader = document.createElement('th');
        let maxPerson = document.createElement('td');
        let tableRow2 = document.createElement('tr');
        let tableRow3 = document.createElement('tr');
        let reservationHeader = document.createElement('th');
        reservationHeader.setAttribute('colspan', '2');
        reservationHeader.setAttribute('class', 'mainHeader');
        let tableRow4 = document.createElement('tr');
        let resHalfDayHeader = document.createElement('th');
        let resHalfDay = document.createElement('td');
        let tableRow5 = document.createElement('tr');
        let resFullDayHeader = document.createElement('th');
        let resFullDay = document.createElement('td');
        let tableRow6 = document.createElement('tr');
        let walkInHeader = document.createElement('th');
        walkInHeader.setAttribute('colspan', '2');
        walkInHeader.setAttribute('class', 'mainHeader');
        let tableRow7 = document.createElement('tr');
        let walkInHalfDayHeader = document.createElement('th');
        let walkInHalfDay = document.createElement('td');
        let tableRow8 = document.createElement('tr');
        let walkInFullDayHeader = document.createElement('th');
        let walkInFullDay = document.createElement('td');

        rentalType.innerHTML = rentals[i].type;
        image.setAttribute('src', rentals[i].image);
        image.setAttribute('alt', rentals[i].type);
        infoHeader.innerHTML = "Rental Info";
        maxPersonHeader.innerHTML = "Seats";
        maxPerson.innerHTML = rentals[i].maxPersons;
        reservationHeader.innerHTML = "Reservation Pricing";
        resHalfDayHeader.innerHTML = "Half Day";
        resHalfDay.innerHTML = rentals[i].reservationHalfDay;
        resFullDayHeader.innerHTML = "Full Day";
        resFullDay.innerHTML = rentals[i].reservationFullDay;
        walkInHeader.innerHTML = "Walk-In Pricing";
        walkInHalfDayHeader.innerHTML = "Half Day";
        walkInHalfDay.innerHTML = rentals[i].walkInHalfDay;
        walkInFullDayHeader.innerHTML = "Full Day";
        walkInFullDay.innerHTML = rentals[i].walkInFullDay;

        rentalCard.appendChild(rentalType);
        rentalCard.appendChild(image);
        rentalCard.appendChild(table);
        table.appendChild(tableRow0);
        table.appendChild(infoHeader);
        table.appendChild(tableRow1);
        table.appendChild(maxPersonHeader);
        table.appendChild(maxPerson);
        table.appendChild(tableRow2);
        table.appendChild(tableRow3);
        table.appendChild(reservationHeader);
        table.appendChild(tableRow4);
        table.appendChild(resHalfDayHeader);
        table.appendChild(resHalfDay);
        table.appendChild(tableRow5);
        table.appendChild(resFullDayHeader);
        table.appendChild(resFullDay);
        table.appendChild(tableRow6);
        table.appendChild(walkInHeader);
        table.appendChild(tableRow7);
        table.appendChild(walkInHalfDayHeader);
        table.appendChild(walkInHalfDay);
        table.appendChild(tableRow8);
        table.appendChild(walkInFullDayHeader);
        table.appendChild(walkInFullDay);

        document.querySelector('section.rental-cards').appendChild(rentalCard);
    };
    });