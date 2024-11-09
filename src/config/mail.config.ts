import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

export const mailConfig = MailerModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    transport: {
      service: configService.get('EMAIL_CREDENTIALS_SERVICE'),
      secure: false,
      auth: {
        user: configService.get('EMAIL_CREDENTIALS_USER'),
        pass: configService.get('EMAIL_CREDENTIALS_PASSWORD'),
      },
    },
    defaults: {
      from: configService.get('EMAIL_DEFAULT_FROM'),
    },
    template: {
      dir: join(__dirname, configService.get('EMAIL_PATH_TEMPLATES')),
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
});
