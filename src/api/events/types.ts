import { Role, Event } from "@prisma/client";

// CONTROLLER
export type CreateEventBody = {
  title: string;
  detail: string;
  start: Date;
  end: Date;
};

export type UpdateEventBody = Partial<Event> & {};

// SERVICE
export type CreateEventPayload = CreateEventBody & {};

export type UpdateEventPayload = UpdateEventBody & {
  id: number;
};

export type FindAllPayload = {
  start: Date;
  end: Date;
};
