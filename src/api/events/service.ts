import { eventRepository } from "./repository";
import {
  FindAllPayload,
  CreateEventPayload,
  UpdateEventPayload,
} from "./types";

const { findAll, findById, updateById, deleteById, create } = eventRepository;

const eventService = {
  getEventByIdService(id: number) {
    return findById(id);
  },

  findAllEventsService(payload: FindAllPayload) {
    return findAll(payload);
  },

  updateEventService(payload: UpdateEventPayload) {
    const { id } = payload;

    return updateById(id, payload);
  },

  createEventService(payload: CreateEventPayload) {
    return create(payload);
  },

  deleteEventService(id: number) {
    return deleteById(id);
  },
};

export { eventService };
