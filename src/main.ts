import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService} from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
      cors: true
  });
  const configService = app.get(ConfigService);
  // or "app.enableVersioning()"
 app.enableVersioning({
  type: VersioningType.URI,
});
  
  app.use(helmet())
 const config = new DocumentBuilder()
    .setTitle('NEST 基于API的基础代码')
    .setDescription('The cats AI description')
    .setVersion('1.0')
    .addTag('developer')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
  await app.listen(configService.get<number>('port'));
}
bootstrap();
