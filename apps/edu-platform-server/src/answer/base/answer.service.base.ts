/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Answer as PrismaAnswer,
  Question as PrismaQuestion,
} from "@prisma/client";

export class AnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AnswerCountArgs, "select">): Promise<number> {
    return this.prisma.answer.count(args);
  }

  async answers<T extends Prisma.AnswerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnswerFindManyArgs>
  ): Promise<PrismaAnswer[]> {
    return this.prisma.answer.findMany<Prisma.AnswerFindManyArgs>(args);
  }
  async answer<T extends Prisma.AnswerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnswerFindUniqueArgs>
  ): Promise<PrismaAnswer | null> {
    return this.prisma.answer.findUnique(args);
  }
  async createAnswer<T extends Prisma.AnswerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnswerCreateArgs>
  ): Promise<PrismaAnswer> {
    return this.prisma.answer.create<T>(args);
  }
  async updateAnswer<T extends Prisma.AnswerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnswerUpdateArgs>
  ): Promise<PrismaAnswer> {
    return this.prisma.answer.update<T>(args);
  }
  async deleteAnswer<T extends Prisma.AnswerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AnswerDeleteArgs>
  ): Promise<PrismaAnswer> {
    return this.prisma.answer.delete(args);
  }

  async getQuestion(parentId: string): Promise<PrismaQuestion | null> {
    return this.prisma.answer
      .findUnique({
        where: { id: parentId },
      })
      .question();
  }
}
