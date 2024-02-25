// JavaScript for handling navigation
function navigate(section) {
    console.log(`Navigating to ${section}`);
}

function checkTripDate(date) {
    // Get the current date without the time
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Set the trip date without the time
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

// Function to log available equipment options
function logEquipmentOptions() {
    let equipmentOptions = ["Skis", "Snowboard", "Helmet", "Poles"];
    for (let option of equipmentOptions) {
        console.log(`Available equipment: ${option}`);
    }
}


// Function to calculate the trip cost
function calculateTripCost(attendees, rentEquipment) {
    const baseCostPerPerson = 100;
    const equipmentRentalCost = 50;

    let totalCost = attendees * baseCostPerPerson;
    if (rentEquipment) {
        totalCost += attendees * equipmentRentalCost;
    }

    return totalCost;
}

// Function to save the booking
function saveBooking() {
    // Retrieve values from input fields
    let destination = document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    let attendees = document.getElementById("attendee").value;
    
    // Validate the date
    let tripDate = new Date(date);
    if (checkTripDate(tripDate)) {
        // Display alert with dynamic values
        alert(`Booking saved. Your booking for ${destination} on ${date} for ${attendees} attendees.`);
    }
}

// Add event listener to the Submit button
document.getElementById("book").addEventListener("click", saveBooking);
