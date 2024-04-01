import { Elysia, t } from "elysia";
import * as controlDeviceController from "../controllers/controlDevice.controller";


const control = new Elysia({ prefix: "/control" });

control.put("/led-on", controlDeviceController.ledControl, { body: t.Object({ topic: t.String() })});
control.put("/fan-on", controlDeviceController.fanControl, { body: t.Object({ topic: t.String() })});
control.put("/door-on", controlDeviceController.doorControl, { body: t.Object({ topic: t.String() })});

control.put("/led-off", controlDeviceController.ledOffControl, { body: t.Object({ topic: t.String() })});
control.put("/door-off", controlDeviceController.doorOffControl, { body: t.Object({ topic: t.String() })});
control.put("/fan-off", controlDeviceController.fanOffControl, { body: t.Object({ topic: t.String() })});

control.put("/led-state", controlDeviceController.ledControl);
control.put("/door-state", controlDeviceController.ledControl);
control.put("/fan-state", controlDeviceController.ledControl);


export default control;
