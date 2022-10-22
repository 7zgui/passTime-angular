import { Role } from "../../common/role.model"

export interface SignupRequest {
    username:string,
    email:string,
    roles:Role[]
    password:string
}
