import { Role } from "../../common/role.model"

export class SignupRequest {
    username?:string
    email?:string
    roles?:Role[]
    password?:string
}
