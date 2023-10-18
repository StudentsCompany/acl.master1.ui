
export class AclUserDTO{

    idAclUser ?: number; // ! means the variable is may be undefined

    username !: string; // ? means the variable is may be absent

    email !: string;

    fristname !: string;

    lastname !: string;

    birthdate !: Date;

    registrationDate !: Date;

    password !: string;

    roles :  AclUserRole[] = [];
}

export enum AclUserRole{
    USER = 'USER',
    ADMIN = 'ADMIN'
}