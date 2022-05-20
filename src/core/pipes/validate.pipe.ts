import { Injectable, ArgumentMetadata, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
    public async transform(value, metadata: ArgumentMetadata) {
        try {
            return await super.transform(value, metadata);
        } catch (error) {
            throw new UnprocessableEntityException(JSON.stringify(error['response'].message));
        }
    }
}