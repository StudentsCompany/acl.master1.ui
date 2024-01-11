import { createAction, props } from "@ngrx/store";
import { AclUserDTO } from "src/app/model/acl.user.model.dto";
import { TokenDTO } from "src/app/model/token.model";
import { CardDTO } from "src/app/model/card/card.model.dto";


export const register = createAction(
    '[AclUser] Register',
    props<{aclUserDTO : AclUserDTO}>());

export const login = createAction(
    '[AclUser] Log-in',
    props<{aclUserDTO : AclUserDTO}>());

export const loggedIn = createAction(
    '[AclUser] Logged-in',
    props<{aclUserDTO : AclUserDTO}>()
);

export const logout = createAction('[AclUser] Log-out');


export const loadAclUserSuccess = createAction(
    '[AclUser] load ACL User',
    props<{aclUserDTO : AclUserDTO}>()
)

export const loadAclUserTokenSuccess = createAction(
    '[AclUser] load ACL User token',
    props<{token : TokenDTO}>()
)

export const loadCardDTOsSuccess = createAction(
    '[CardDTO[]] load CardDTOs',
    props<{cardDTOs : CardDTO[]}>()
)
