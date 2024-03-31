import { Elysia, t } from "elysia";
import * as controlDeviceController from "../controllers/controlDevice.controller";


const control = new Elysia({ prefix: "/control" });

control.put("/led", controlDeviceController.ledControl);
control.put("/door", () => "state");
control.put("/fan", () => "state");


export default control;
