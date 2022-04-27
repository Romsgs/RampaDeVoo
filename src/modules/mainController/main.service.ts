//importação do controller de repositorio
import { MainRepository } from "./main.repository";
//importação das DTOS
import { createRampaDto, idAlvoDelete } from "./dto";
export class MainService {
  constructor(private mainRepository = new MainRepository()) {}

  async getRampas() {
    try {
      const rampas = await this.mainRepository.getRampas();
      return rampas;
    } catch (error) {
      console.log(error);
    }
  }

  async createRampa(createRampaDto: createRampaDto) {
    try {
      console.log("entrou no service");
      const res = await this.mainRepository.createRampa(createRampaDto);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteRampa(idDto: idAlvoDelete) {
    try {
      const res = await this.mainRepository.deleteRampa(idDto);
      console.log(res)
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}
