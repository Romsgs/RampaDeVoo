import { PrismaClient } from "@prisma/client";
import { createRampaDto, idAlvoDelete } from "./dto";

export class MainRepository {
  constructor(private prisma = new PrismaClient()) {}

  async getRampas() {
    return await this.prisma.rampa.findMany();
  }

  async createRampa(createRampaDto: createRampaDto) {
    console.log("entrou no repository")
    return await this.prisma.rampa.create({
      data: {
        title: createRampaDto.title,
        dificulty: createRampaDto.dificulty,
        official: createRampaDto.official,
        verified: createRampaDto.verified,
        pathToFiles: createRampaDto.pathToFiles,
      },
    });
  }

  async deleteRampa(idDto: idAlvoDelete) {
    return await this.prisma.rampa.delete({ where: { id: idDto.id } });
  }
}
