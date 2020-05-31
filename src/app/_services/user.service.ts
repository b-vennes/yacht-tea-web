import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    readonly userIdKey = 'yacht-tea-user-id';

    getUserId(): string {
        const userIdValue = localStorage.getItem(this.userIdKey);

        if (!userIdValue) {
            const newUserIdValue = uuidv4();
            localStorage.setItem(this.userIdKey, newUserIdValue);

            return newUserIdValue;
        }

        return userIdValue;
    }

}