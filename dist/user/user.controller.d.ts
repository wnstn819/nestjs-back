import { UserService } from './user.service';
import { Prisma, User as UserModel } from '@prisma/client';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signupUser(userData: {
        name?: string;
        email: string;
        age: number;
        phone: string;
        detail: string;
    }): Promise<UserModel>;
    get(id: any): Promise<UserModel[]>;
    getName(searchString: string): Promise<UserModel[]>;
    getEmail(searchString: string): Promise<UserModel[]>;
    getPhone(searchString: string): Promise<UserModel[]>;
    updateUser(id: any, updateData: Prisma.UserUpdateInput): Promise<UserModel>;
    delete(id: any): Promise<UserModel>;
}
