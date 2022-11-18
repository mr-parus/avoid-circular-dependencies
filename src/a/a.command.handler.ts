import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ACommand } from './a.command';
import { AService } from './a.service';

@CommandHandler(ACommand)
export class ACommandHandler implements ICommandHandler<ACommand, string> {
  constructor(private aService: AService) {}

  async execute(command: ACommand): Promise<string> {
    return this.aService.createA();
  }
}
