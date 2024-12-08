import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = []
  getHello(): string {
    return 'Hello World!';
  }
  // Get Users
  getALLUsers(){
    return this.users.length > 0 
    ? this.users 
    : new NotFoundException("No users found"); // Obliger Exeption Filter
  }

  // Create User
  createUser(user:any){
     this.users.push(user);
  }
}
