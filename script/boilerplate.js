// jQuery Plugin Boilerplate from http://stefangabos.ro/jquery/jquery-plugin-boilerplate-oop/
// 

;
(function($) {
    $.pluginName = function(el, options) {
        var defaults = {
            color: "yellow",
            onSomeEvent: function () {}
        }

        // Use plugin to refer to the current instance of the object.
        var plugin = this;

        plugin.settings = {}

        // Constructor.
        var init = function() {
            plugin.settings = $.extend({}, defaults, options);

            plugin.el = el;

            // Additional constructor code goes here.
        }

        // Public methods go here.
        plugin.setBackground = function() {
            el.css({
                backgroundColor: defaults.color
            });
        }

        plugin.some_public_method = function() {
            alert("plugin.some_public_method() called.");
        }

        // Call the constructor
        init();
    }

})(jQuery);


$(document).ready(function() {
    $("#btnBoilerplate").click(function() {
        var plugin = new $.pluginName($("#testDiv"));
        console.log("Default color setting = '" + plugin.settings.color + "'.");
        plugin.setBackground();
    });
});