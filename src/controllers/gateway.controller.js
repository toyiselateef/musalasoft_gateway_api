import {
  postGateway,
  getAllGateways,
  getGateway,
  addOrRemoveDeviceFromGateway,
} from "../services/gateway.services.js";

const Gateway = async (req, res) => {
  const { uid } = req.params;
  const response = await getGateway(uid);
  return res.status(200).send(response);
};

const addGateway = async (req, res) => {
  const { name, ipv4, devices } = req.body;
  const response = await postGateway(serialNumber, name, ipv4, devices);

  if (response.error) {
    return res.status(422).send(response);
  }
  return res.status(201).send(response);
};

const Gateways = async (req, res) => {
  const response = await getAllGateways();
  return res.status(200).send(response);
};

const add_RemoveDeviceFromGateway = async (req, res) => {
  const { uid } = req.params;
  const { device, action } = req.body;

  const response = await addOrRemoveDeviceFromGateway(device, action, uid);
  if (response.error) {
    return res.status(404).send(response);
  }
  return res.status(200).send(response);
};

export { Gateways, Gateway, addGateway, add_RemoveDeviceFromGateway };

// import Gateway from "../models/Gateway.js";
// import validator from "ip-validator";
// import PeripheralDevice from "../models/PeripheralDevice.js";

// const getGateway = async (req, res) => {
//   const { uid } = req.params;

//   const response = await Gateway.find({ uid });
//   return res.status(200).json({ error: "", gateway: response });
// };

// const postGateway = async (req, res) => {
//   const { serialNumber, name, ipv4, devices } = req.body;

//   if (!validator.ipv4(ipv4)) {
//     return res.status(422).json({ error: "invalid ipv4 address", message: "" });
//   }

//   if (devices.length > 10) {
//     return res.status(422).json({
//       error: "number of devices cannot be greater than 10",
//       message: "",
//     });
//   }

//   let gateway = await Gateway.create({ serialNumber, name, devices, ipv4 });

//   for (let index = 0; index < devices.length; index++) {
//     const device = devices[index];
//     device.gateway = gateway.id;

//     await Gateway.create(device);
//   }

//   gateway = await Gateway.find({}).populate("devices");

//   return res
//     .status(201)
//     .json({ gateway, error: "", message: "saved successfully" });
// };

// const getAllGateways = async (req, res) => {
//   const response = await Gateway.find({});
//   return res.status(200).json({ error: "", gateways: response });
// };

// const addOrRemoveDeviceFromGateway = async (req, res) => {
//   const { device, action, uid } = req.body;

//   let gateways = await Gateway.find({ uid });
//   if (gateway.length == 0) {
//     return res.status(404).json({ error: "gateway not found" });
//   }

//   let gateway = gateways[0];
//   if (action == "add") {
//     device.gateway = gateway.id;
//     await PeripheralDevice.create(device);

//     gateway = await Gateway.find({ uid }).populate("devices");

//     return res
//       .status(200)
//       .json({ message: "gateway updated", error: "", gateway });
//   } else if (action == "remove") {
//     gateway.devices = gateway.devices.filter((curr) => curr.uid != device.uid);

//     await gateway.save();
//     gateway = await Gateway.find({ uid }).populate("devices");

//     return res
//       .status(200)
//       .json({ message: "device removed successfully", error: "", gateway });
//   }
// };

// export {
//   getAllGateways,
//   getGateway,
//   postGateway,
//   addOrRemoveDeviceFromGateway,
// };
