// import { INestApplication } from '@nestjs/common';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import fs from 'fs';
// import path from 'path';

// // const packageDataRaw = fs.readFileSync('package.json');

// // const packageData = JSON.parse(packageDataRaw.toString());

// const operationIdFactory = (controllerKey: string, methodKey: string) =>
//   `${methodKey}`;

// export default function swaggerConfig(app: INestApplication<any>) {
//   const config = new DocumentBuilder()
//     .setTitle('Main Service API')
//     .setDescription('Main Service API')
//     .setVersion('0.0.1')
//     .addBearerAuth({
//       type: 'apiKey',
//       name: 'authorization',
//       in: 'header',
//     })
//     .build();
//   const swaggerDocument = SwaggerModule.createDocument(app, config, {
//     operationIdFactory,
//     include: [],
//   });
//   SwaggerModule.setup('main/docs', app, swaggerDocument);
// }
