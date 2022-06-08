"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const SetupSwagger = (app) => {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Online Grading System')
        .setDescription('REST API Docs')
        .addBearerAuth()
        .addApiKey()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
};
exports.SetupSwagger = SetupSwagger;
//# sourceMappingURL=swagger.config.js.map