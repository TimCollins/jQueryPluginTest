$(document).ready(function () {

    // Change link colour on click.
    $("#btnChangeColour").click(function () {
        $("a").css("color", "red");
    });

    $("#btnGreenify").click(function () {
        $("a").greenify().addClass("greenified");
    });
});

// Wrap the greenify function in an immediately-invoked function expression
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