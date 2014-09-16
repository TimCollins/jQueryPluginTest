$(document).ready(function () {
    $("#btnChangeColour").click(function () {
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

    $("#btnLocation").click(function() {
        $("a").showLinkLocation();
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

(function($) {
    $.fn.showLinkLocation = function () {
        // Filter reduces the set of matched elements to those that match the specified 
        // selector. I don't think it's needed in this case since the selector that is
        // triggering the function call is already "a".
        //this.filter("a").each(function () {
        //this.each(function () {
        //    // For each element in the set of matching objects, wrap it in a jQuery object
        //    // and save as a variable called "link".
        //    var link = $(this);
        //    var linkText = " (" + link.attr("href") + ")";

        //    // Append the link text to the link object.
        //    // See http://stackoverflow.com/q/280634/137001 for possible fixes to the 
        //    // problem of repeated appends being displayed.
        //    link.append(linkText);
        //});

        this.filter("a").append(function () {        
            return " (" + this.href + ")";
        });

        // Return the object so that the method can be chained.
        return this;
    };
}(jQuery));