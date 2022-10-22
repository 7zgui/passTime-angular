import { Role } from "./role.model";

export interface User{
    username:string,
    email:string,
    password:string,
    roles:Role[]
}