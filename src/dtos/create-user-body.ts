import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUser {
    @IsNotEmpty()
    @Length(5,100)
    name: string;

    @IsNotEmpty({
        message: 'function invalid'
    })
    @IsString()
    function: string;
}
