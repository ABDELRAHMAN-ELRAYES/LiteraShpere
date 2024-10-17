export interface IError extends Error{
    statusCode:number;
    status:string;
}