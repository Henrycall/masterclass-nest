import { IsNotEmpty, Length } from "class-validator";

export class CreateUser {
    @IsNotEmpty()
    @Length(5,100)
    name: string;

    @IsNotEmpty({
        message: 'user invalid'
    })
    function: string;
}
