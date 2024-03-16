import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
        return next.handle().pipe(
            map(data => ({
                responseCode: context.switchToHttp().getResponse().statusCode,
                responseMessage: 'Success',
                responseData: data,
            })),
        );
    }
}