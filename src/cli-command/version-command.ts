
import { CliCommandInterface } from './cli-command.interface.js';
import { readFileSync } from 'fs';
import chalk from 'chalk';

export default class VersionCommand implements CliCommandInterface {
  public readonly name = '--version';

  private readVersion(): string {
    const ContentJSON = readFileSync('./package.json', 'utf-8');
    const content = JSON.parse(ContentJSON);
    return content.version;
  }

  public async execute(): Promise<void> {
    const version = this.readVersion();
    console.log(`${chalk.white.bgBlack(version)}`);
  }
}