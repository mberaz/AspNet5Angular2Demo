class User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    constructor(id: number, fullName: string, email: string, password: string) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}
