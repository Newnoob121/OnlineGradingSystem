import { PrismaService } from './../prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    //setup phase
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookService, PrismaService],
    }).compile();

    service = module.get<BookService>(BookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

describe('findBookById', () => {
  describe('when the book exists', () => {
    it('should return the book', async () => {
      const prismaService = {
        book: {
          findUnique: jest.fn().mockResolvedValue({
            id: '1',
            title: 'test',
          }),
        },
      };
    });
    describe('when the book does not exist', () => {
      it('should return null', async () => {
        const prismaService = {
          book: {
            findUnique: jest.fn().mockResolvedValue(null),
          },
        };
      });
    });
  });
});
//----------------------------------------------------------------------------------------------------//
describe('findAllBooks', () => {
  describe('when all books exists', () => {
    it('should return all book', async () => {
      const prismaService = {
        book: {
          findMany: jest.fn().mockResolvedValue({}),
        },
      };
    });
  });
});
