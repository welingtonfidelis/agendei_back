import { Event } from "@prisma/client";
import { prisma } from "../../dbCLient";
import { FindAllPayload } from "./types";

const eventRepository = {
  create(data: Omit<Event, "id" | "created_at" | "updated_at">) {
    return prisma.event.create({ data });
  },

  async findAll(payload: FindAllPayload) {
    const { start, end } = payload;

    const where: any = { start: { gte: start }, end: { lte: end }};

    const total = await prisma.event.count({ where });

    const events = await prisma.event.findMany({
      where,
      orderBy: {
        title: "asc",
      },
    });

    return { events, total };
  },

  findById(id: number) {
    return prisma.event.findUnique({ where: { id } });
  },

  updateById(id: number, data: Partial<Event>) {
    return prisma.event.update({ where: { id }, data });
  },

  deleteById(id: number) {
    return prisma.event.delete({ where: { id } });
  },
};

export { eventRepository };
