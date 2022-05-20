import { Injectable } from '@nestjs/common';
import { ResultantBuilder } from 'src/core/helpers/resultant-builder';
import { CreateUserBody } from './bodies';
import { GetUsersDto } from './dtos';

interface UsersState {
    users: {
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        address: string,
        zipCode: string,
        countryCode: string
    }[]
}

@Injectable()
export class UsersService {
    private _state: UsersState;
    constructor() {
        this._state = {
            users: []
        };
    }

    async createUser(body: CreateUserBody) {
        const resultantBuilder = new ResultantBuilder<boolean>();
        try {
            this._state.users.push(body);
            return resultantBuilder.setStatus(true).setMessage("User saved successfully").setData(true).build();
        } catch (error) {
            throw error;
        }
    }

    async getUsers() {
        const resultantBuilder = new ResultantBuilder<GetUsersDto>();
        try {
            const resultant: GetUsersDto = {
                users: this._state.users
            };
            return resultantBuilder.setStatus(true).setMessage("Users fetched successfully").setData(resultant).build();
        } catch (error) {
            throw error;
        }
    }
}