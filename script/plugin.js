$(document).ready(function () {

    // Change link colour on click.
    $("#btnChangeColour").click(function () {
        $("a").css("color", "red");
    });

    $("#btnGreenify").click(function () {
        $("a").greenify().addClass("greenified");
    });

    $("#btnPopup").click(function() {
        $.fn.showPopup();
    });
});

// Wrap the greenify function in an immediately-invoked function expression.
// Declare a function with one parameter, "$", and pass it the jQuery function object.
(function($) {
    // Turn all links green when clicked.
    $.fn.greenify = function () {
        var brightGreen = "#00FF00";
        // Can pass colour names as well as HTML colour codes.
        //this.css("color", "green");
        this.css("color", brightGreen);
        console.log("Changed link colours to " + brightGreen);

        // Make the function chainable.
        return this;
    };
}(jQuery));

(function ($) {
    $.fn.showPopup = function() {
        alert("This is a popup.");
    };
}(jQuery));

