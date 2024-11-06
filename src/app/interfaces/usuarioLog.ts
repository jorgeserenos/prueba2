export interface usuarioLog {
    id: number;
    username: string;
    mail: string;
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    accessToken: string;
}