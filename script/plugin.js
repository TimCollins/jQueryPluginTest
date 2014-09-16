$(document).ready(function () {

    // Change link colour on click.
    $("#btnChangeColour").click(function () {
        $("a").css("color", "red");
    });

    $("#btnGreenify").click(function () {
        $("a").greenify().addClass("greenified");
    });

    $("#btnPopup").click(function() {
        $.fn.showPopup("show");
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
    $.fn.showPopup = function (action) {
        // Check the passed variable, logging any errors. 
        // Note the use of the strict comparison operator '===', see http://stackoverflow.com/a/523647/
        // Strings must be of same type and have the same sequence of characters, same 
        // length, and same characters in corresponding positions.
        if (action === "show") {
            alert("This is a popup.");
        }

        if (action === undefined) {
            console.log("No action passed.");
        }
        else {
            console.log("Unsupported action '" + action + "' passed.");
        }
    };
}(jQuery));

