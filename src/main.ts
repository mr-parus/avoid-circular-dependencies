import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AModule } from './a/a.module';
import { AService } from './a/a.service';
import { BModule } from './b/b.module';
import { BService } from './b/b.service';

@Module({ imports: [AModule, BModule] })
class AppModule {}

(async function start() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const a = app.get(AService);
  const b = app.get(BService);

  console.log('B created from A:', await a.createBFromA());
  console.log('A created from B:', await b.createAFromB());
})();
