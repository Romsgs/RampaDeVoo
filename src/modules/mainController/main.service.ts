import { PrismaClient } from "@prisma/client";
import { createRampaDto } from "./dto";
export class MainService {
  constructor(private prisma = new PrismaClient()) {}

  async getRampas() {
    const rampas = await this.prisma.rampa.findMany();
  }

  async createRampa(createRampaDto: createRampaDto) {
    const res = await this.prisma.rampa.create({
      data: {
        title: createRampaDto.title,
        dificulty: createRampaDto.dificulty,
        official: createRampaDto.official,
        verified: createRampaDto.verified,
        pathToFiles: createRampaDto.pathToFiles,
      },
    });
  }
}
