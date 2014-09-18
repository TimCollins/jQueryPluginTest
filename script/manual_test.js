var results = {
    total: 0,
    bad: 0
};

// Test expected output given known input.
function test(then, expected) {
    results.total++;
    var result = prettyDate("2014-09-17T22:24:17Z", then);

    if (result !== expected) {
        results.bad++;
        console.log("Expected " + expected + " but was " + result + ".");
    }
};

test("2014-09-17T22:24:10Z", "just now");
test("2014-09-17T22:23:17Z", "1 minute ago");
test("2014-09-17T21:23:24Z", "1 hour ago");
test("2014-09-16T21:23:24Z", "Yesterday");
test("2014-09-15T21:23:24Z", "2 days ago");
test("2014-09-12T21:23:24Z", "5 days ago");

console.log("Of " + results.total + " tests, " + results.bad + " failed, " +
    (results.total - results.bad) + " passed.");