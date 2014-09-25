setupMocks = function () {
    // Simulate a status code of 500 being returned.
    $.mockjax({
        url: "/rest/user/get",
        status: 500,
        responseTime: 1,
        responseText: "The server encountered an unexpected condition which prevented it from fulfilling the request."
    });

    // Simulate valid JSON data being returned.
    $.mockjax({
        url: "/rest/user/get/1",
        responseTime: 1,
        responseText: {
            status: "success",
            id: "1",
            name: "Homer Simpson",
        }
    });

    // Simulate a timeout
    $.mockjax({
        url: "/rest/user/get/2",
        isTimeout: true,
        responseText: "There was a timeout."
    });
}

doTests = function () {
    QUnit.asyncTest("Asynchronous Test for status code 500", function (assert) {
        $.getJSON("/rest/user/get", function() {})
            .fail(function(response) {
                assert.equal(response.status, 500);
                QUnit.start();
            });
    });


    QUnit.asyncTest("Test for valid user", function (assert) {
        expect(3);

        $.getJSON("/rest/user/get/1", function (response) {
            assert.equal(response.status, "success");
            assert.equal(response.id, "1");
            assert.equal(response.name, "Homer Simpson");
            QUnit.start();
        });

        //$.getJSON("/rest/user/get/1", function (response) {
        //    assert.equal("success", response.status);
        //    assert.equal("1", response.id);
        //    assert.equal("Homer Simpson", response.name);
        //});
    });

    QUnit.asyncTest("Test for timeout", function(assert) {
        $.getJSON("/rest/user/get/2", function () { })
            .fail(function (response) {
                // Not sure if this is the correct assertion to do. 
                // I was expecting to be able to verify a timeout property somewhere.
                assert.equal(response.responseText, "There was a timeout.");
                QUnit.start();
            });

        // $.getJSON is basically just an AJAX call so this variation might be usable.
        //var request = $.ajax({
        //    dataType: "json",
        //    url: url,
        //    data: data,
        //    success: function () { },
        //    timeout: 2000
        //}).fail(function (xhr, status) {
        //    if (status == "timeout") {
        //        // do stuff in case of timeout
        //    }
        //});
    });

    // Example test from http://api.qunitjs.com/QUnit.asyncTest/
    QUnit.asyncTest("asynchronous test: one second later!", function (assert) {
        expect(1);

        setTimeout(function () {
            assert.ok(true, "Passed and ready to resume!");
            QUnit.start();
        }, 250);
    });

    // A small test to verify that things are set up correctly.
    QUnit.test("A Passing Test", function (assert) {
        assert.equal(2, 2);
    });
};

