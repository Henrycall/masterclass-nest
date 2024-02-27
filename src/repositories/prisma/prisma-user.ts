import { PrismaService } from 'src/database/prisma.service'
import { User } from '../user-repository'
import { v4 as uuidv4 } from 'uuid';

export class PrismaUserRepository implements User { 
    constructor(private prisma: PrismaService){}

        async create(name: string, memberFunction: string): Promise<void> {
            await this.prisma.user.create({
                data:{
                    id: uuidv4(), 
                    name,
                    function : memberFunction
                }
            })
        }
}


