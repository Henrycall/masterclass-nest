import { IsNotEmpty } from "class-validator";

export class CreateUser {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    function: string;
}
