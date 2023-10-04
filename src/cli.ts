import { Command } from 'commander';

export interface ProgramArguments {
  inputFile: string;
  lang: string;
  dir: string;
  name: string;
  description: string;
  shortName: string;
  scope: string;
  id: string;
  startUrl: string;
  display: string;
  orientation: string;
  themeColor: string;
  backgroundColor: string;
}

export function parseProgramArguments(): ProgramArguments {
  const program = new Command();

  program.name('webmanifest-generator').description('CLI for generating a web application manifest').version('1.0.0');

  program
    .command('generate')
    .argument('<input-file>')
    .option('--lang <string>', 'Language', 'en')
    .option('--dir <string>', 'Text direction', 'ltr')
    .option('--name <string>', 'Your application name', 'example')
    .option('--description <string>', 'Your application description', '')
    .option('--short-name <string>', 'Your short application name', 'example')
    .option('--scope <string>', 'Scope', '/')
    .option('--id <string>', 'Id', '/')
    .option('--start-url <string>', 'Start URL', '/')
    .option('--display <string>', 'Display type', 'standalone')
    .option('--orientation <string>', 'Display orientation', 'any')
    .option('--theme-color <string>', 'Hex theme color (without the #)', 'ffffff')
    .option('--background-color <string>', 'Hex background color (without the #)', 'ffffff');

  program.parse();

  const cmd = program.commands[0];

  return { ...cmd.opts(), inputFile: cmd.args[0] };
}
