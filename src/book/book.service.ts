import { Injectable, Logger } from '@nestjs/common';
import { Prisma, Book } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BookService {
  private logger: Logger;
  constructor(private readonly prismaService: PrismaService) {
    this.logger = new Logger('BookService');
  }
  //with prisma we dont need dto as we use the generated types

  async createBook(data: Prisma.BookCreateInput): Promise<Book> {
    try {
      return await this.prismaService.book.create({ data });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findAllBooks(): Promise<Book[]> {
    try {
      return await this.prismaService.book.findMany();
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findBookById(id: Prisma.BookWhereUniqueInput): Promise<Book> {
    try {
      return await this.prismaService.book.findUnique({ where: id });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async updateBookById(params: {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.BookUpdateInput;
  }): Promise<Book> {
    try {
      const { where, data } = params;
      return await this.prismaService.book.update({ data, where });
    } catch (error) {
      this.logger.error(error);
    }
  }

  async removeBookById(id: Prisma.BookWhereUniqueInput): Promise<Book> {
    try {
      return await this.prismaService.book.delete({ where: id });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
