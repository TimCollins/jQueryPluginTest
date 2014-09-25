setupMocks = function () {
    $.mockjax({
        url: "/rest/user/get",
        status: 500,
        responseTime: 1,
        responseText: "The server encountered an unexpected condition which prevented it from fulfilling the request."
    });

    $.mockjax({
        url: "/rest/user/get/1",
        responseTime: 1,
        responseText: {
            status: "success",
            id: "1",
            name: "Homer Simpson",
        }
    });
}

doTests = function () {
    QUnit.asyncTest("Asynchronous Test for status code 500", function (assert) {
        $.getJSON("/rest/user/get", function() {})
            .fail(function(response) {
                assert.equal(500, response.status);
                QUnit.start();
            });
    });

    QUnit.asyncTest("asynchronous test: one second later!", function (assert) {
        expect(1);

        setTimeout(function () {
            assert.ok(true, "Passed and ready to resume!");
            QUnit.start();
        }, 250);
    });

    QUnit.asyncTest("Test for valid user", function (assert) {
        expect(3);

        QUnit.stop();

        $.getJSON("/rest/user/get/1", function (response) {
            assert.equal("success", response.status);
            assert.equal("1", response.id);
            assert.equal("Homer Simpson", response.name);
            QUnit.start();
        });


        //$.getJSON("/rest/user/get/1", function (response) {
        //    assert.equal("success", response.status);
        //    assert.equal("1", response.id);
        //    assert.equal("Homer Simpson", response.name);
        //});
    });

    QUnit.test("A Passing Test", function (assert) {
        assert.equal(2, 2);
    });
};

