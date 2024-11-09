import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { RequestDto } from './dto/request.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(data: RequestDto): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: data.email,
        subject: 'Email de prueba',
        template: 'mail',
        context: {
          username: data.username,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
