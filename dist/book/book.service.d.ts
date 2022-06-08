import { Prisma, Book } from '@prisma/client';
import { PrismaService } from '../prisma.service';
export declare class BookService {
    private readonly prismaService;
    private logger;
    constructor(prismaService: PrismaService);
    createBook(data: Prisma.BookCreateInput): Promise<Book>;
    findAllBooks(): Promise<Book[]>;
    findBookById(id: Prisma.BookWhereUniqueInput): Promise<Book>;
    updateBookById(params: {
        where: Prisma.BookWhereUniqueInput;
        data: Prisma.BookUpdateInput;
    }): Promise<Book>;
    removeBookById(id: Prisma.BookWhereUniqueInput): Promise<Book>;
}
