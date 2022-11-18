import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ACommand } from '../a/a.command';

@Injectable()
export class BService {
  constructor(private commandBus: CommandBus) {}

  createB(): string {
    return 'b';
  }

  createAFromB() {
    // A created from B without depending on A module
    const a = this.commandBus.execute(new ACommand());
    return a;
  }
}
