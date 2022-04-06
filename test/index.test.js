//const { saveUser } = require("../src/services/user.service");
//import {} from "../src/services/gateway.services";
import {
  postGateway,
  getAllGateways,
  getGateway,
  addOrRemoveDeviceFromGateway,
} from "../src/services/gateway.services.js";

describe("Gateway Unit Tests", function () {
  describe("Gateway Service Unit Tests", function () {
    it("should successfully add gateway", async function () {
      //const serialNumber = Date.now().toString();
      const name = "Ashkay";
      const ipv4 = "127.0.0.1";
      const devices = [{ uid: 2, vendor: "ABCD", dateCreated: Date.now() }];
      const response = await postGateway({
        name,
        ipv4,
        devices,
      });
      expect(response.name).to.equal(name);
      expect(response.dob.toString()).to.equal(new Date(dob).toString());
      experience.map((exp, index) => {
        expect(response.devices[index].uid).to.equal(exp.years);
        expect(response.devices[index].vendor).to.equal(exp.organizationName);
      });
    });
    it("should throw an error if the number of users with the same profileId is not zero", async function () {});
  });
});
