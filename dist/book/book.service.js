"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BookService = class BookService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger('BookService');
    }
    async createBook(data) {
        try {
            return await this.prismaService.book.create({ data });
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async findAllBooks() {
        try {
            return await this.prismaService.book.findMany();
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async findBookById(id) {
        try {
            return await this.prismaService.book.findUnique({ where: id });
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async updateBookById(params) {
        try {
            const { where, data } = params;
            return await this.prismaService.book.update({ data, where });
        }
        catch (error) {
            this.logger.error(error);
        }
    }
    async removeBookById(id) {
        try {
            return await this.prismaService.book.delete({ where: id });
        }
        catch (error) {
            this.logger.error(error);
        }
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map