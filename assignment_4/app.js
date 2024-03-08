//nav handling
function navigate(section) {
    console.log(`Navigating to ${section}`);
}

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

//save booking
function saveBooking() {
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let attendees = document.getElementById("attendee").value;
    
    //validate the date
    let tripDate = new Date(date);
    if (checkTripDate(tripDate)) {
        alert(`Booking saved. Your booking for ${destination} on ${date} for ${attendees} attendees.`);
    }
}