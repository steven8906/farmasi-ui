export default interface SessionModel {
    token                : Token;
    user                 : User;
    permissions          : Permission[];
    role_has_permissions : PermissionHasRole[];
    role_has_model       : RolesHasModel[];
    plan_prices          : PlanPrices;
    config               : Config;
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

export interface Config {
    id                      : number
    name_bank               : string
    name_owner_account_bank : string
    number_account_bank     : string
    type_account_bank       : string
    one_plan                : string
    two_plan                : string
    three_plan              : string
    banner_image_one        : string
    banner_image_two        : string
    banner_image_three      : string
    bottom_banner_image     : string
    percent                 : string | number
    text_bottom_banner      : string
    download_one_url        : string
    download_one_name       : string
    download_two_url        : string
    download_two_name       : string
    created_at              : Date | null
    updated_at              : Date | null
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
