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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async createBook(bookInput) {
        return this.bookService.createBook(bookInput);
    }
    async findAllBooks() {
        return this.bookService.findAllBooks();
    }
    async findOne(id) {
        return this.bookService.findBookById({ id: Number(id) });
    }
    async update(id, updateInput) {
        return this.bookService.updateBookById({
            where: { id: Number(id) },
            data: { title: updateInput.title, author: updateInput.author },
        });
    }
    async remove(id) {
        return this.bookService.removeBookById({ id: Number(id) });
    }
};
__decorate([
    (0, common_1.Post)('CreateBook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)('books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findAllBooks", null);
__decorate([
    (0, common_1.Get)('books/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('books/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('books/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "remove", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map