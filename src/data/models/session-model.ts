export default interface SessionModel {
    token             : Token;
    permissions       : Permission[];
}

export interface Token {
    accessToken : string;
    token       : TokenInfo;
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
}
