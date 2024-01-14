import { createReducer, on } from "@ngrx/store";
import { userInitialState } from "../state/acl.user.state";
import { loadAclUserSuccess, loadAclUserTokenSuccess, loadCardDTOsSuccess } from "../action/acl.user.action";


export const aclUserReducer = createReducer(
    userInitialState,
    // on(...) is a listner to some action
    on(loadAclUserTokenSuccess, (state, {token}) => {
        return {
            ...state,
            token : token,
            userIsAuthenticated : true
        }
    }),

    on(loadAclUserSuccess, (state, {aclUserDTO}) => {
        return {
            ...state,
            aclUserDTO : aclUserDTO
        }
    }),
    on(loadCardDTOsSuccess, (state, {cardDTOs}) => {
            return {
                ...state,
                cardDTOs : cardDTOs
            }
        }),

)

