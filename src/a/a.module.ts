import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ACommandHandler } from './a.command.handler';
import { AService } from './a.service';

@Module({
  imports: [CqrsModule],
  providers: [ACommandHandler, AService],
  exports: [AService],
})
export class AModule {}
