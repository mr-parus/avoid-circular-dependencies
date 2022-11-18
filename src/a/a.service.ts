import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { BCommand } from '../b/b.command';

@Injectable()
export class AService {
  constructor(private commandBus: CommandBus) {}

  createA(): string {
    return 'a';
  }

  createBFromA() {
    return this.commandBus.execute(new BCommand());
  }
}
