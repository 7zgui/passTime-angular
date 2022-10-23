import { Role } from "./role.model";

export class User{
    username?:string
    email?:string
    password?:string
    roles?:Role[]
    token?: string
}