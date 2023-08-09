import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';
import { homedir } from 'os';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(
      `/Users/minho/Library/ApplicationSupport/mkcert/vos.land+3-key.pem`,
    ),
    cert: fs.readFileSync(
      `/Users/minho/Library/ApplicationSupport/mkcert/vos.land+3.pem`,
    ),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(8000);
  console.log('server start');
}
bootstrap();
