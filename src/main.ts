import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';
import { SetupSwagger } from './Configurations/swagger.config';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  SetupSwagger(app);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));

  Logger.verbose(
    `Api Documentation https://${configService.get('URL')}${
      (configService.get('ENV') === 'development' &&
        `:${configService.get('PORT')}`) ||
      ''
    }/api/docs`,
    'NestApplication',
  );
}
bootstrap();
