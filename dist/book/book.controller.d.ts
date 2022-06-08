import { BookService } from './book.service';
declare type bookData = {
    title: string;
    author: string;
    publishYear: number;
};
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(bookInput: bookData): Promise<import(".prisma/client").Book>;
    findAllBooks(): Promise<import(".prisma/client").Book[]>;
    findOne(id: string): Promise<import(".prisma/client").Book>;
    update(id: string, updateInput: bookData): Promise<import(".prisma/client").Book>;
    remove(id: string): Promise<import(".prisma/client").Book>;
}
export {};
