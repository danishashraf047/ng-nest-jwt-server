import { Controller, Get, HttpCode, HttpStatus, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserBody } from './bodies';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('v1')
@ApiHeader({ name: 'x-access-token' })
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(
        private readonly _usersService: UsersService
    ) {

    }

    @Get('get-users')
    @HttpCode(HttpStatus.OK)
    async getUsers() {
        return await this._usersService.getUsers();
    }

    @Post('create-user')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateUserBody) {
        return await this._usersService.createUser(body);
    }
}