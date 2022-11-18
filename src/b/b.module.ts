import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { BCommandHandler } from './b.command.handler';
import { BService } from './b.service';

@Module({
  imports: [CqrsModule],
  providers: [BCommandHandler, BService],
  // B service remains not exported (private), but we still use it from outside
  // exports: [BService],
})
export class BModule {}
