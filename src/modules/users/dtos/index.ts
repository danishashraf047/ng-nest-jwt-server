namespace GetUsers {
    class User {
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly phoneNumber: string;
        readonly address: string;
        readonly zipCode: string;
        readonly countryCode: string;
    }

    export class Main {
        users: User[]
    }
}

export class GetUsersDto extends GetUsers.Main { }