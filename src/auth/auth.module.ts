import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { RegisterService } from './services/register.service';

@Module({
  controllers: [AuthController],
  providers: [RegisterService],
})
export class AuthModule {}
