import {expect} from "chai";
import Ota from "../source/ota.js";

// create a function that takes an object and create two arrays of it, one for all the keys, one for
// all the values. Return an array of the two arrays

describe("ota", () => {
    it("shall exist", () => {
        let ota = new Ota();

        expect(ota).to.be.defined;
    });

    it("shall have the ability to create two arrays (one for keys, another for values) from original object", () => {
        let ota = new Ota();
        let inputObject = {
            key1: 1,
            key2: 2,
            key3: 3,
            key4: 4
        };
        let expectedOutput = [
            ['key1', 'key2', 'key3', 'key4'],
            [1, 2, 3, 4]
        ];

        expect(ota.getKeysAndValues(inputObject)).to.deep.equal(expectedOutput);
    });
});
