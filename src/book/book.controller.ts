import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';

type bookData = {
  title: string;
  author: string;
  publishYear: number;
};

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('CreateBook')
  async createBook(@Body() bookInput: bookData) {
    return this.bookService.createBook(bookInput);
  }

  @Get('books')
  async findAllBooks() {
    return this.bookService.findAllBooks();
  }

  @Get('books/:id')
  async findOne(@Param('id') id: string) {
    return this.bookService.findBookById({ id: Number(id) });
  }

  @Patch('books/:id')
  async update(@Param('id') id: string, @Body() updateInput: bookData) {
    return this.bookService.updateBookById({
      where: { id: Number(id) },
      data: { title: updateInput.title, author: updateInput.author },
    });
  }

  @Delete('books/:id')
  async remove(@Param('id') id: string) {
    return this.bookService.removeBookById({ id: Number(id) });
  }
}
