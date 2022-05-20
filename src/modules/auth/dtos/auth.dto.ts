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

export class SignInDto extends SignIn.Main { }

namespace SignOut {
    export class Main {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly userId: number;
    }
}

export class SignOutDto extends SignOut.Main { }

namespace IsAlreadySignedIn {
    export class Main {
        @ApiProperty()
        @IsDefined()
        @IsNotEmpty()
        readonly userId: number;
    }
}

export class IsAlreadySignedInDto extends IsAlreadySignedIn.Main { }