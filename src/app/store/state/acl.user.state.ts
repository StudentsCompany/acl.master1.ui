import { AclUserDTO } from "src/app/model/acl.user.model.dto";


export interface AclUserState{
    aclUserDTO :  AclUserDTO | null,
    token : string | null
    // Should we add another information in the user state ?
}

export const userInitialState : AclUserState = {
    aclUserDTO : null,
    token : null
    // Do not forget to initialize the rest of the attributs
}