import { AclUserDTO } from "src/app/model/acl.user.model.dto";
import { CardDTO } from "src/app/model/card/card.model.dto";
import { TokenDTO } from "src/app/model/token.model";

export interface AclUserState{
    aclUserDTO :  AclUserDTO | null,
    token : TokenDTO | null
    cardDTOs : CardDTO[] | null
    // Should we add another information in the user state ?
}

export const userInitialState : AclUserState = {
    aclUserDTO : null,
    token : null,
    cardDTOs : null
    // Do not forget to initialize the rest of the attributs
}
