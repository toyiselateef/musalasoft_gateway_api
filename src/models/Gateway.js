import mongoose from "mongoose";
import serialNumber from "./serialNumber.js";

const GatewaySchema = new mongoose.Schema({
  serialNumber: { type: String, required: true },
  name: { type: String, required: true },
  ipv4: { type: String },
  devices: [{ type: mongoose.Schema.Types.ObjectId, ref: "PeripheralDevice" }],
});
portfolioSchema.plugin(serialNumber);
const Gateway = mongoose.model("Gateway", GatewaySchema);

export default Gateway;

// •	a unique serial number (string),
// •	human-readable name (string),
// •	IPv4 address (to be validated),
// •	multiple associated peripheral devices.
