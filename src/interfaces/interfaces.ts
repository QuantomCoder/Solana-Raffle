import { Optional } from "sequelize";
export interface UserAttributes {
    id: number;
    user_account: string;
    blockchain_coin: number;
    is_admin: boolean;
}
export interface UserCreationAttributes extends Optional<UserAttributes,"id"> {}
export interface UserSalonaAttributes {
    id: number;
    issuer: string;
    solana_token_id: number;
    is_used: boolean;
}
export interface UserSalonaCreationAttributes extends Optional<UserSalonaAttributes,"id"> {}
export interface RafleAttributes {
    id: number;
    creator_id: number;
    solana_token_id: number;
    is_open: boolean;
}
export interface RafleCreationAttributes extends Optional<RafleAttributes,"id">{}
export interface TicketAttributes {
    id: number;
    raffle_id: number;
    user_id: number;
    price: number;
    isPaymentDone:boolean
}
export interface TicketCreationAttributes extends Optional<TicketAttributes,"id"|"isPaymentDone">{}
export interface WinnerAttributes {
    id: number;
    ticket_id: number;
    user_id: number;
    solana_token_id: number;
}
export interface WinnerCreationAttributes extends Optional<WinnerAttributes,"id">{}
export interface NotificationsAttributes {
    id:number,
    user_id:number,
    raffle_id:number,
    winner_table_id:number,
    is_red:boolean
}
export interface NotificationsCreationAttributes extends Optional<NotificationsAttributes,"id">{}