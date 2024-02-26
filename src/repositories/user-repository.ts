export abstract class User{
    abstract create(name : string, memberFunction: string) : Promise<void>
}