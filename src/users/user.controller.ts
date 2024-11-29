import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { createUserDto } from "./dto/CreateUser.dto";

@Controller('users')
export class UsersController{
    constructor(private userService:UserService){}

    @Post()
    createUser(@Body() createUserDto:createUserDto  ){
        console.log(createUserDto);
        return this.userService.createUser(createUserDto)
    }
}