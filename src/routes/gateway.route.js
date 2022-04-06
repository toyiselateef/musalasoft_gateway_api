import express from "express";
import {
  addGateway,
  Gateways,
  Gateway,
  add_RemoveDeviceFromGateway,
} from "../controllers/gateway.controller.js";

const router = express.Router();

router.post("/", addGateway);

router.get("/:id", Gateway);

router.get("/", Gateways);

router.put("/:id", add_RemoveDeviceFromGateway);

export default router;
