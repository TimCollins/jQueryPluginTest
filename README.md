jQueryPluginTest
================

Testing jQuery plugin functionality. A design from [CSS Zen Garden](http://www.csszengarden.com/) is used to save thinking about front-end design too much.

Compilation Requirements
--
This project is a VS2012 solution but is just a collection of HTML and JavaScript files. To run, simply open index.html in a browser. Correct operation of JavaScript functionality has been verified in the following browsers:
- [Microsoft Internet Explorer](http://windows.microsoft.com/en-IE/internet-explorer/download-ie) Version 9
- [Google Chrome](http://www.google.ie/chrome/) Version 37.0.2062.120 m
- [Firefox](https://www.mozilla.org/en-US/firefox/new/) 32.0.1
- [Opera](http://www.opera.com/) 12.17

Other browsers and versions may work but have not been tested.

Usage
--
Open index.html in a supported browser.
There are various buttons displayed below the banner image. They are intended to illustrate various topics.
- **Change Link Colour:** This button will change the foreground and background colour of all links on the page. Default values are specified but are publicy-accessible so can be changed as desired. HTML colour code strings like "#00FF00" can be passed in addition to CSS colour names like "white". The applied settings will be visible on-screen and logged to the browser console.
- **Show Link Location:** This button will expand all links on the page so that the destination URL is appended. The text format of the displayed link (bold, italic etc.) is changeable through a publicy-accessible function. This defaults to bold. Changed links are output to the console.
- **Show Popup:** This simply pops up an alert box but operates using an action parameter and features the [===](http://stackoverflow.com/a/523647/137001) operator.
- **Use Boilerplate:** An alternative plugin implementation which simply sets the background colour of a specific div to a specified colour. The colour has a default but can be specified before use and is also logged to the browser console.


Other Features
--
The file qunit.html demonstrates JavaScript unit testing using [QUnit](http://qunitjs.com/). The test results are displayed in that file. The tests themselves are in qunit_test.js.


Useful Links
--
- [Online Markdown Editor](http://dillinger.io/)