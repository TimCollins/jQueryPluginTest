doTests = function() {
    QUnit.test("prettyDate basics", function (assert) {
        var now = "2014-09-17T22:24:17Z";

        assert.equal(prettyDate(now, "2014-09-17T22:24:16Z"), "just now");
        assert.equal(prettyDate(now, "2014-09-17T22:23:17Z"), "1 minute ago");
        assert.equal(prettyDate(now, "2014-09-17T21:24:17Z"), "1 hour ago");
        assert.equal(prettyDate(now, "2014-09-16T21:24:17Z"), "Yesterday");
        assert.equal(prettyDate(now, "2014-09-15T21:24:17Z"), "2 days ago");
        assert.equal(prettyDate(now, "2014-09-12T21:24:17Z"), "5 days ago");
        assert.equal(prettyDate(now, "2010-09-12T21:24:17Z"), undefined);
    });
};

