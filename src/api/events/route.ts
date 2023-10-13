import { Router } from "express";

import { eventController } from "./controller";
import { payloadValidate } from "../../shared/middleware/payloadValidate";
import {
  deleteSchema,
  getByIdSchema,
  listSchema,
  updateSchema,
  createSchema,
} from "./midleware/requestPayloadValidateSchema";
import { permissionValidate } from "../../shared/middleware/permissionValidate";
import { Role } from "@prisma/client";

const { USER } = Role;

const eventRouter = Router();
const { list, getById, update, delete: deleteById, create } = eventController;

// NOT AUTHENTICATED ROUTES

// AUTHENTICATED ROUTES

// ROUTES WITH PERMISSION VALIDATE
eventRouter.use(permissionValidate([USER]));
eventRouter.get("/events", payloadValidate(listSchema), list);
eventRouter.get("/events/:id", payloadValidate(getByIdSchema), getById);
eventRouter.patch("/events/:id", payloadValidate(updateSchema), update);
eventRouter.post("/events", payloadValidate(createSchema), create);
eventRouter.delete("/events/:id", payloadValidate(deleteSchema), deleteById);

export { eventRouter };
