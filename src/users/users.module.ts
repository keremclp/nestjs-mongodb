import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/User.schema";
import { UserService } from "./user.service";
import { UsersController } from "./user.controller";

@Module({
    imports:[
        MongooseModule.forFeature([{
            name:User.name,
            schema:UserSchema 
        }])
    ],
    providers:[UserService],
    controllers: [UsersController]
})
export class UsersModule {}