"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma.service");
const swagger_config_1 = require("./Configurations/swagger.config");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    await prismaService.enableShutdownHooks(app);
    (0, swagger_config_1.SetupSwagger)(app);
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('PORT'));
    common_1.Logger.verbose(`Api Documentation https://${configService.get('URL')}${(configService.get('ENV') === 'development' &&
        `:${configService.get('PORT')}`) ||
        ''}/api/docs`, 'NestApplication');
}
bootstrap();
//# sourceMappingURL=main.js.map