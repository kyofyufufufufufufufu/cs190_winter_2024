//nav handling
function navigate(section) {
    console.log(`Navigating to ${section}`);
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    var destination = document.getElementById("destination").value;
    var date = document.getElementById("date").value;
    var attendees = document.getElementById("attendee").value;

    if (destination === "" || date === "" || attendees === "") {
        event.preventDefault();
        if (destination === "") {
            document.getElementById("destination").classList.add("alert");
        } else {
            document.getElementById("destination").classList.remove("alert");
        }
        if (date === "") {
            document.getElementById("date").classList.add("alert");
        } else {
            document.getElementById("date").classList.remove("alert");
        }
        if (attendees === "" || isNaN(attendees) || attendees <= 0) {
            document.getElementById("attendee").classList.add("alert");
            alert("Please enter a valid number of attendees and fill in all the required fields.");
        } else {
            document.getElementById("attendee").classList.remove("alert");
        }
    } else if (isNaN(attendees) || attendees <= 0) {
        event.preventDefault();
        document.getElementById("attendee").classList.add("alert");
        alert("Please enter a valid number of attendees.");
    } else if (!checkTripDate(date)) {
        event.preventDefault();
    } else {
        document.getElementById("destination").classList.remove("alert");
        document.getElementById("date").classList.remove("alert");
        document.getElementById("attendee").classList.remove("alert");
        alert(`Booking saved. Your booking for ${destination} on ${date} for ${attendees} attendees.`);
    }
});

//prevents zero or negative numbers in the attendee input field
var attendeeInput = document.getElementById("attendee");
attendeeInput.addEventListener("input", function(event) {
    var inputValue = parseInt(event.target.value);
    if (inputValue <= 0 || isNaN(inputValue)) {
        event.target.value = 1;
        alert("Please enter a valid number of attendees.");
    }
});

//input validation for trip booking
function checkTripDate(date) {
    //current date
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    //set trip date
    let tripDateWithoutTime = new Date(date);
    tripDateWithoutTime.setHours(0, 0, 0, 0);

    if (tripDateWithoutTime < currentDate) {
        console.error("Error: Cannot book a trip on or before today");
        alert("You cannot book a trip on or before today.");
        return false;
    } else {
        console.log("Trip booking is valid");
        return true;
    }
}

//save booking
function saveBooking() {
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let attendees = document.getElementById("attendee").value;
    
    //validate the data
    let tripDate = new Date(date);
    if (checkTripDate(tripDate) && destination !== "") {
        alert(`Booking saved. Your booking for ${destination} on ${date} for ${attendees} attendees.`);
    }
}

//log available equipment options
function logEquipmentOptions() {
    let equipmentOptions = ["Skis", "Snowboard", "Helmet", "Poles"];
    for (let option of equipmentOptions) {
        console.log(`Available equipment: ${option}`);
    }
}

//calculate the trip cost
function calculateTripCost(attendees, rentEquipment) {
    const baseCostPerPerson = 100;
    const equipmentRentalCost = 50;

    let totalCost = attendees * baseCostPerPerson;
    if (rentEquipment) {
        totalCost += attendees * equipmentRentalCost;
    }

    return totalCost;
}

//array of images
var resortImages = [
    "/static/images/aspen.jpg",
    "/static/images/sun peaks.jpg",
    "/static/images/mt hood.jpg",
    "/static/images/breckenridge.jpg",
    "/static/images/jackson hole.jpg",
    "/static/images/park city.jpg",
    "/static/images/palisades tahoe.jpg"
];

function displayImages() {
    var container = document.getElementById("imageContainer");
    container.innerHTML = '';

    //l through array of images
    for (var i = 0; i < resortImages.length; i++) {
        var img = document.createElement("img");

        img.src = resortImages[i];

        img.width = 640;
        img.height = 420;

        //hides images initially
        img.style.display = "none";

        //appends images to container
        container.appendChild(img);
    }

    //display the first
    container.firstChild.style.display = "block";

    startSlideshow();
}

//slideshow detaails
var currentIndex = 0;
var intervalId;

//display the next image in the slideshow
function displayNextImage() {
    var images = document.getElementById("imageContainer").getElementsByTagName("img");
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % resortImages.length;
    images[currentIndex].style.display = "block";
}

function startSlideshow() {
    intervalId = setInterval(displayNextImage, 5000);
}

function stopSlideshow() {
    clearInterval(intervalId);
}


document.addEventListener("DOMContentLoaded", function() {
    displayImages();
    
    //slideshow var
    var currentIndex = 0;
    var intervalId;

    function startSlideshow() {
        intervalId = setInterval(displayNextImage, 3000);
    }

    function stopSlideshow() {
        clearInterval(intervalId);
    }

    startSlideshow();
});
