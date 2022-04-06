import Gateway from "../models/Gateway.js";
import validator from "ip-validator";
import PeripheralDevice from "../models/PeripheralDevice.js";

const getGateway = async (uid) => {
  let response = await Gateway.find({ uid });
  return response;
};

const postGateway = async (name, ipv4, devices) => {
  let response = {};
  if (!validator.ipv4(ipv4)) {
    response = { error: "invalid ipv4 address", message: "" };
    return response;
  }

  if (devices.length > 10) {
    response = {
      error: "number of devices cannot be greater than 10",
      message: "",
    };
    return response;
  }

  let gateway = await Gateway.create({ name, devices, ipv4 });

  for (let index = 0; index < devices.length; index++) {
    const device = devices[index];
    device.gateway = gateway.id;

    await Gateway.create(device);
  }

  gateway = await Gateway.find({}).populate("devices");
  response = { gateway, error: "", message: "saved successfully" };
  return response;
};

const getAllGateways = async () => {
  const res = await Gateway.find({});

  let response = { error: "", gateways: res };
  return response;
};

const addOrRemoveDeviceFromGateway = async (device, action, uid) => {
  let response = {};

  let gateways = await Gateway.find({ uid });
  if (gateway.length == 0) {
    response = { error: "gateway not found" };
    return response;
  }

  let gateway = gateways[0];
  if (action == "add") {
    device.gateway = gateway.id;
    await PeripheralDevice.create(device);

    gateway = await Gateway.find({ uid }).populate("devices");
    response = { message: "gateway updated", error: "", gateway };
    return response;
  } else if (action == "remove") {
    gateway.devices = gateway.devices.filter((curr) => curr.uid != device.uid);

    await gateway.save();
    gateway = await Gateway.find({ uid }).populate("devices");
    response = { message: "device removed successfully", error: "", gateway };
    return response;
  }
};

export {
  getAllGateways,
  getGateway,
  postGateway,
  addOrRemoveDeviceFromGateway,
};
