import { IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

namespace SignIn {
    export class Main {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly username: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly password: string;
    }
}

export class SignInBody extends SignIn.Main { }