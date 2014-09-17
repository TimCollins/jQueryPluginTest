// Utility functions

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

String.prototype.contains = function(it) {
     return this.indexOf(it) != -1;
};