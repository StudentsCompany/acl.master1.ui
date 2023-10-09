import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AclUserState } from "../state/acl.user.state";


const selectFeatureAclUser = createFeatureSelector<AclUserState>('user');

export const selectAclUserDTO = createSelector(
    selectFeatureAclUser,
    (aclUserState) => aclUserState.aclUserDTO
);

export const selectAclUserToken = createSelector(
    selectFeatureAclUser,
    (aclUserState) => aclUserState.token
);