describe("String trimmer", function () {

    var inputString = "Lorem ipsum dolor sit amet,\n consectetur adipisicing elit.\n\
        Blanditiis debitis impedit natus\n porro quae vel? \nAmet culpa dolores ipsam itaque\
        officia omnis quas quos\n repellat rerum, sapiente\n vel, veniam, voluptas.",
        size = 10;

    it("Each line in the output string don`t have to exceed the size", function () {

        var output = trimString(inputString, size).split("\n");

        for (var i = 0, len = output.length; i < len; i++) {
            expect(output[i].length).toEqual(size);
        }
    });

    it("The output string have to contain '\\n' line break", function () {

        var output = trimString(inputString, size);

        expect(output).toContain("\n");
    });

    it("Have to be able to throw error in a case of incorrect input data", function () {

        expect(function () {
            trimString(inputString)
        }).toThrowError("incorrect input");

        expect(function () {
            trimString(inputString, inputString)
        }).toThrowError("incorrect input");

        expect(function () {
            trimString(inputString, -23873)
        }).toThrowError("incorrect input");

        expect(function () {
            trimString({}, -23873)
        }).toThrowError("incorrect input");

        expect(function () {
            trimString()
        }).toThrowError("incorrect input");
    });
});