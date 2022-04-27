import { PrismaClient } from "@prisma/client";

export class UserRepository{
  constructor (private prisma = new PrismaClient()){}

}