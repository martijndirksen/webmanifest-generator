import { writeFile } from 'node:fs/promises';

export function writeWebmanifest({
  lang,
  dir,
  name,
  description,
  shortName,
  icons,
  scope,
  id,
  startUrl,
  display,
  orientation,
  themeColor,
  backgroundColor,
}: {
  lang: string;
  dir: string;
  name: string;
  description: string;
  shortName: string;
  icons: {
    src: string;
    sizes: string;
    type: string;
  }[];
  scope: string;
  id: string;
  startUrl: string;
  display: string;
  orientation: string;
  themeColor: string;
  backgroundColor: string;
}): Promise<void> {
  const json = JSON.stringify({
    lang,
    dir,
    name,
    description,
    short_name: shortName,
    icons,
    scope,
    id,
    start_url: startUrl,
    display,
    orientation,
    theme_color: themeColor,
    background_color: backgroundColor,
  });

  return writeFile('manifest.webmanifest', json, { encoding: 'utf-8' });
}
