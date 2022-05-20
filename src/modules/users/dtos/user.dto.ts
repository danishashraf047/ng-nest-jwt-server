import { IsNotEmpty, IsDefined, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
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
        readonly lasName: string;
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
        @ArrayNotEmpty()
        readonly zipCode: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly countryCode: string;
    }
}

export class CreateUserDto extends CreateUser.Main { }

namespace GetUsers {
    class User {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly firstName: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly lasName: string;
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
        @ArrayNotEmpty()
        readonly zipCode: string;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly countryCode: string;
    }

    export class Main {
        users: User[]
    }
}

export class GetUsersDto extends GetUsers.Main { }

namespace DeleteUser {
    export class Main {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly userId: number;
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly loginUserId: number;
    }
}