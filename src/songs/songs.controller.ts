import { Controller, Delete, Get, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService){}
  @Get()
  findAll() {
    return 'find all songs';
  }

  @Get(':id')
  findOne() {
    return 'fetch song based on id';
  }

  @Put(':id')
  update() {
    return ' update song based on id';
  }

  @Delete(':id')
  delete(){
    return 'delete song based on id'
  }
}
