import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    InternalServerErrorException,
    HttpException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ResultantBuilder } from '../helpers/resultant-builder';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const resultantBuilder = new ResultantBuilder<any>();
        return next
            .handle()
            .pipe(
                catchError(error => {
                    console.log("Danish")
                    console.log(error)
                    if (error.hasOwnProperty('status') && error.hasOwnProperty('message') && error.hasOwnProperty('data')) {
                        console.log("HttpException with ResultantBuilder Error");
                        return throwError(error);
                    }
                    //  else if (error instanceof BaseError) {
                    //     console.log("Sequelize Error");
                    //     return throwError(new InternalServerErrorException(resultantBuilder.setStatus(false).setMessage("Something went wrong").setData(JSON.stringify(error)).build()));
                    // } 
                    else if (error instanceof HttpException) {
                        console.log("HttpException Error");
                        return throwError(error);
                    } else {
                        console.log("Common Error");
                        return throwError(new InternalServerErrorException(resultantBuilder.setStatus(false).setMessage("Something went wrong").setData(error.toString()).build()));
                    }
                }),
            );
    }
}
