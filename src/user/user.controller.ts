import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getGroups(): any {
    return {
      'group1': "Nika,Andrew,Josh",
      'group2': "James, Khaled"
    }
  }

  @Post()
  joinGroup(): string {
    return "you joined a group"
  }

  @Delete()
  leaveGroup(): string {
    return "you left the group";
  }
}

