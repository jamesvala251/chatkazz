export class LoginModel {
    constructor(
        public username?: string,
        public password?: string,
        public appType = 'WEB'
    ) { }
}

export class ChangePasswordModel {
    constructor(
        public currentPassword?: string,
        public newPassword?: string,
        public confirmPassword?: string
    ) { }
}

export class UserDetail {
    constructor(
        public activated?: boolean,
        public authorities: string[] = [],
        public createdBy?: string,
        public createdDate?: string,
        public email?: string,
        public firstName?: string,
        public id?: number,
        public imageUrl?: string,
        public langKey?: string,
        public lastModifiedBy?: string,
        public lastModifiedDate?: string,
        public lastName?: string,
        public login?: string
    ) { }
}
