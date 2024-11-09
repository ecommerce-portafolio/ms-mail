import { Body, Controller, Post } from '@nestjs/common';
import { RequestDto } from './dto/request.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('test')
  sendEmail(@Body() request: RequestDto): void {
    this.mailService.sendEmail(request);
  }
}
