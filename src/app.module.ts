import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    BookModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AccountModule,
  ],
  controllers: [AppController, BookController],
  providers: [
    AppService,
    BookModule,

    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
