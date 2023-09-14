export default interface SessionModel {
    token                : Token;
    user                 : User;
    permissions          : Permission[];
    role_has_permissions : PermissionHasRole[];
    role_has_model       : RolesHasModel[];
    plan_prices          : PlanPrices;
}

export interface Token {
    accessToken : string;
    token       : TokenInfo;
}

export interface RolesHasModel {
    role_id:    number;
    model_type: string;
    model_id:   number;
}

export interface PlanPrices {
    one   : number;
    two   : number;
    three : number;
}

export interface User {
    id   : number;
    user : string;
}

export interface PermissionHasRole {
    permission_id: number;
    role_id:       number;
}


export interface TokenInfo {
    id          : string;
    user_id     : number;
    client_id   : string;
    name        : string;
    scopes      : string[];
    revoked     : boolean;
    created_at  : string;
    updated_at  : string;
    expires_at  : string;
}

export interface Permission {
    name        : string;
    id          : number;
}
