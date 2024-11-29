import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { createUserDto } from "./dto/CreateUser.dto";

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel:Model<User>){}

    createUser(createUserDto:createUserDto ){ 
        const newUser = new this.userModel(createUserDto)
        return newUser.save()
    }

    getUsers(){
        return this.userModel.find()
    }

    getUserById(id:string){
        return this.userModel.findById(id)
    }

}