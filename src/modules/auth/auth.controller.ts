import { Controller, Post, Body, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInBody } from './bodies';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('v1')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService
    ) { }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() body: SignInBody) {
        return this._authService.signIn(body);
    }
}