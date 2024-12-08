import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users")
  getALLUsers(){
    return this.appService.getALLUsers();
  }

  @Post("users")
  createUser(@Body() user:{name:string,email:string}){
    return this.appService.createUser(user);
  }
}
