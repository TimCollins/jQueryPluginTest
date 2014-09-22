doTests = function () {
    QUnit.test("A Test", function (assert) {
        assert.equal(1, 1);
    });

    QUnit.test("A Failing Test", function (assert) {
        assert.equal(1, 2);
    });
};

