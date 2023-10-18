import { createAction, props } from "@ngrx/store";
import { AclUserDTO } from "src/app/model/acl.user.model.dto";


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
    props<{token : string}>()
)