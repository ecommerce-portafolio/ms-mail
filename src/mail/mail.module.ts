import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { mailConfig } from '../config/mail.config';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [ConfigModule.forRoot(), mailConfig],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
