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
        // Can pass colour names as well as HTML colour codes.
        //this.css("color", "green");
        this.css("color", "#00FF00");

        // Make the function chainable.
        return this;
    };

    $.ltrim = function(str) {
        return str.replace(/^\str+/, "");
    };

    $.rtrim = function(str) {
        return str.replace(/\s+$/, "");
    };
}(jQuery));


// Example of immediately-invoked function expression.
(function () {
    var output = "This will be logged to the browser console.";
    console.log(output);
})();

// The output variable doesn't exist at this point.
//console.log(output);
