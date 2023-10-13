import { Request, Response } from "express";

import { eventService } from "./service";
import { CreateEventBody, UpdateEventBody } from "./types";

const {
  findAllEventsService,
  getEventByIdService,
  createEventService,
  updateEventService,
  deleteEventService,
} = eventService;

const eventController = {
  async create(req: Request, res: Response) {
    const body = req.body as CreateEventBody;

    const newEvent = await createEventService(body);

    return res.json(newEvent);
  },

  async list(req: Request, res: Response) {
    const start = req.query.start_date as string;
    const end = req.query.end_date as string;
    
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date(startDate.getTime());
    
    if (!end) {
      startDate.setHours(0, 0, 0);
      endDate.setHours(23, 59, 59);
    }
    
    const response = await findAllEventsService({
      start: startDate,
      end: endDate,
    });

    return res.json(response);
  },

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    const selectedEvent = await getEventByIdService(id);

    if (!selectedEvent) return res.status(404).json({});

    return res.json(selectedEvent);
  },

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const body = req.body as UpdateEventBody;

    await updateEventService({ ...body, id });

    return res.status(204).json({});
  },

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);

    await deleteEventService(id);

    return res.status(204).json({});
  },
};

export { eventController };
