import {expect} from "chai";
import App from "../source/app.js";

describe("ota", () => {
    it("shall exist", () => {
        let ota = new Ota();

        expect(ota).to.be.defined;
    });

});
