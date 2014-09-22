doTests = function () {
    function getInnerText(element) {
        var result = element.text;

        if (result == undefined) {
            result = element.innerText;
        }

        return result;
    }

    QUnit.test("prettyDate.format", function (assert) {
        
        function testDate(then, expected) {
            var now = "2014-09-17T22:24:17Z";
            assert.equal(prettyDate.format(now, then), expected);

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

        assert.equal(getInnerText(links[0]).trim(), "September 18th, 2013");
        assert.equal(getInnerText(links[2]).trim(), "September 17th, 2013");

        prettyDate.update("2013-09-18T22:24:17Z");

        assert.equal(getInnerText(links[0]).trim(), "2 hours ago");
        assert.equal(links[2].innerHTML, "Yesterday");
    });
};

