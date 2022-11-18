import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BCommand } from './b.command';
import { BService } from './b.service';

@CommandHandler(BCommand)
export class BCommandHandler implements ICommandHandler<BCommand, string> {
  constructor(private bService: BService) {}

  async execute(command: BCommand): Promise<string> {
    return this.bService.createB();
  }
}
