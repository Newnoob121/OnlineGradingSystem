import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * Logging Interceptor
 * A custom interceptor that allows the app to override the built in NestJS Logger
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const { originalUrl, method, params, query, body } = req;

    console.log({
      originalUrl,
      method,
      params,
      query,
      body,
    });

    return next.handle().pipe(
      tap((data) =>
        console.log({
          statusCode,
          data,
        }),
      ),
    );
  }
  // Log the request
}
