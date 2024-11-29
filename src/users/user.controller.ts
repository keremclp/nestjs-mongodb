import { Body, Controller, Get, HttpException, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/CreateUser.dto";
import mongoose from "mongoose";

@Controller('users')
export class UsersController{
    constructor(private userService:UserService){}

    @Post()
    createUser(@Body() createUserDto:createUserDto  ){
        console.log(createUserDto);
        return this.userService.createUser(createUserDto)
    }

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Get(':id') //users/:id
    async getUserById(@Param('id') id:string ){
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('user not found', 404)

        const findUser = await this.userService.getUserById(id) 
        if(!findUser) throw new HttpException('user not found', 404)
        return findUser;
    }
    

}