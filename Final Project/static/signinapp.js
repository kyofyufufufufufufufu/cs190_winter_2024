$(document).ready(function() {
    $("#backArrow").on("click", function(event) {
        event.preventDefault();
        history.back(); // Navigate back to the previous page
    });
});