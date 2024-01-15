
export class AclUserDTO{

    idAclUser !: number; // ? means the variable may be undefined

    username !: string; // ! means the variable may be absent

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
