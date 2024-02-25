import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
import { DbService } from './db/db.service';


class HelloWorldDto {
  @ApiProperty()
  message: string
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private DbServise: DbService) {}

  @Get()
  @ApiOkResponse({
    type: HelloWorldDto
  })
  async getHello(): Promise<HelloWorldDto> {
    const users = await this.DbServise.user.findMany({})
    console.log(users)
    return {message: this.appService.getHello()};
  }
}
