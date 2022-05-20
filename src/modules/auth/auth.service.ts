import { Injectable, BadRequestException } from '@nestjs/common';
import { SignInBody } from './bodies';
import { ResultantBuilder } from 'src/core/helpers/resultant-builder';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly _jwtService: JwtService
    ) { }

    async signIn(body: SignInBody) {
        const resultantBuilder = new ResultantBuilder<any>();
        try {
            if (body.username == "admin" && body.password == "admin") {
                var token = await this.generateToken({ userId: 1 });
                return resultantBuilder.setStatus(true).setMessage("User authenticated successfully").setData({
                    accessToken: token
                }).build();
            } else {
                throw new BadRequestException("Invalid credential");
            }
        } catch (error) {
            throw error;
        }
    }

    private async generateToken(payload: string | object | Buffer) {
        return await this._jwtService.signAsync(payload);
    }
}