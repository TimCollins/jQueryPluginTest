$(document).ready(function () {

    // Change link colour on click.
    $("#btnChangeColour").click(function () {
        $("a").css("color", "red");
    });

    $("#btnGreenify").click(function () {
        // Example of chaining the output from the greenify function.
        //$("a").greenify().addClass("greenified");

        // Examples of specifying settings. Pass an anonymous object with name/value pairs
        // that match the format of what is specified in the function.
        // Pass just color
        //$("a").greenify({
        //    color: "orange"
        //});

        // Pass color and backgroundColor
        //$("a").greenify({
        //    color: "orange",
        //    backgroundColor: "black"
        //});

        // Pass neither (defaults defined in the function will be used)
        $("a").greenify();
    });

    $("#btnPopup").click(function() {
        $.fn.showPopup("show");
    });
});

(function($) {
    $.fn.greenify = function (options) {

        // Create an anonymous object with two properties - color and backgroundColor.
        // Give the properties default values and use extend() to merge the function parameter
        // called options into it.
        var settings = $.extend({
            color: "#00FF00",
            backgroundColor: "white"
        }, options);
        
        console.log("Changed link colour to " + settings.color);
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });
    };
}(jQuery));

(function ($) {
    $.fn.showPopup = function (action) {
        // Check the passed variable, logging any errors. 
        // Note the use of the strict comparison operator '===', see http://stackoverflow.com/a/523647/ and http://stackoverflow.com/a/359509/
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

