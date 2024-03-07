import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { RegisterService } from '../services/register.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerService: RegisterService) {}

  /*=====  register Controller  ======*/
  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.registerService.register();
  }

}
