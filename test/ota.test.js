import {expect} from "chai";
import Ota from "../source/ota.js";

describe("ota", () => {
    it("shall exist", () => {
        let ota = new Ota();

        expect(ota).to.be.defined;
    });

});
