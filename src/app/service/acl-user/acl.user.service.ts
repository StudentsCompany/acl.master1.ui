import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AclUserDTO } from "src/app/model/acl.user.model.dto";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn : 'root'
})
export class AclUserService {

    private ROOT = 'users/user';

    private REGISTER = this.ROOT + '/register'
    private GET_TOKEN = this.ROOT + '/token';
    private VALIDATE_TOKEN = this.ROOT + '/validateToken';


    constructor(private httpClient : HttpClient){

    }

    getAclUserById(id : number){
        return this.httpClient.get<AclUserDTO>(
            `${environment.urls.apiRoot}${this.ROOT}/${id}`
        );
    }

    getAclUserByUsername(username : string){ // TODO should ne created in the backend
        return this.httpClient.get<AclUserDTO>(
            `${environment.urls.apiRoot}${this.ROOT}/${username.trim()}`
        );
    }

    getAll(){
        return this.httpClient.get<AclUserDTO>(
            `${environment.urls.apiRoot}${this.ROOT}`
        );
    }

    postAclUser(aclUserDTO : AclUserDTO){
        console.log("Post method")
        console.log(aclUserDTO)
        return this.httpClient.post<AclUserDTO>(
            `${environment.urls.apiRoot}${this.REGISTER}`, 
            aclUserDTO
        )

    }   

    getToken(aclUserDTO : AclUserDTO ){ // Post Method
        return this.httpClient.post<string>(
            `${environment.urls.apiRoot}${this.GET_TOKEN}`,
            aclUserDTO
        );
    }

    getValidateToken(token : string){
        // We are getting in the request params in the backend // Is it secure ????
        // Should we put it in the headers ?
        return this.httpClient.get<string>(
            `${environment.urls.apiRoot}${this.VALIDATE_TOKEN}?${token}`
        );
    }
}