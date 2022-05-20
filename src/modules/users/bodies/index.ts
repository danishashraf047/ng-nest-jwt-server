import { IsNotEmpty, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

namespace CreateUser {
    export class Main {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly firstName: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly lastName: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly email: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly phoneNumber: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly address: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly zipCode: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly countryCode: string;
    }
}

export class CreateUserBody extends CreateUser.Main { }