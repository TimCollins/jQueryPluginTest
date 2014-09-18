doTests = function() {
    QUnit.test("prettyDate.format", function (assert) {
        
        function testDate(then, expected) {
            var now = "2014-09-17T22:24:17Z";
            assert.equal(prettyDate(now, then), expected);

        }

        testDate("2014-09-17T22:24:16Z", "just now");
        testDate("2014-09-17T22:23:17Z", "1 minute ago");
        testDate("2014-09-17T21:24:17Z", "1 hour ago");
        testDate("2014-09-16T21:24:17Z", "Yesterday");
        testDate("2014-09-15T21:24:17Z", "2 days ago");
        testDate("2014-09-12T21:24:17Z", "5 days ago");
        testDate("2010-09-12T21:24:17Z", undefined);
    });

    QUnit.test("prettyDate.update", function(assert) {
        var links = document.getElementById("qunit-fixture").getElementsByTagName("a");

        assert.equal(links[0].innerHTML, "September 18th, 2013");
    });
};

