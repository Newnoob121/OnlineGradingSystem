import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger Configurations
 * @param {INestApplication} app Swagger Config Input for app
 */
export const SetupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('Online Grading System')
    .setDescription('REST API Docs')
    .addBearerAuth()
    .addApiKey()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);
};
