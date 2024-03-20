//array of images
var resortImages = [
    "url1.jpg",
    "url2.jpg",
    "url3.jpg",
    "url4.jpg",
    "url5.jpg",
    "url6.jpg"
];


function displayImages() {
    var container = document.getElementById("imageContainer");

    //loop through array of images
    for (var i = 0; i < resortImages.length; i++) {
        var img = document.createElement("img");

        //set the src t0o the current image URL
        img.src = resortImages[i];

        // Optionally, you can set other attributes or styles for the image
        img.alt = "Resort Image"; // Alt text for accessibility
        img.classList.add("resort-image"); // Add a CSS class for styling

        //append the image to the container
        container.appendChild(img);
    }
}

// Call the function to display images
displayImages();