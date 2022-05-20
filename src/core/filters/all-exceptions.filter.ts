import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { ResultantBuilder } from '../helpers/resultant-builder';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const resultantBuilder = new ResultantBuilder<any>();
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR;
        let message = undefined;
        // if (exception instanceof BaseError) {
        //     message = exception.toString();
        // } 
        // else 
        if (exception instanceof HttpException) {
            message = exception.message;
        } else {
            message = exception.toString();
        }
        response.status(status).json(resultantBuilder.setStatus(false).setMessage(message).setData(null).build());
        // response.status(status).json({
        //     statusCode: status,
        //     timestamp: new Date().toISOString(),
        //     path: request.url,
        // });
    }
}