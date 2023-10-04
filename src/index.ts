#!/usr/bin/env node

import { parseProgramArguments } from './cli.js';
import { createFavicon, createImage } from './image.js';
import { createIcon } from './icon.js';
import { writeWebmanifest } from './webmanifest.js';

(async () => {
  const programArguments = parseProgramArguments();

  const sizes = [57, 72, 76, 114, 120, 144, 152, 180, 512];
  const maskedSize = sizes[sizes.length - 1];

  const promises = [
    createFavicon(programArguments.inputFile),
    ...sizes.map(x =>
      createImage(programArguments.inputFile, {
        width: x,
        height: x,
        outputFileName: createIcon(x).src.slice(1),
      }),
    ),
    createImage(programArguments.inputFile, {
      width: maskedSize,
      height: maskedSize,
      outputFileName: createIcon(maskedSize, true).src.slice(1),
    }),
    writeWebmanifest({
      ...programArguments,
      icons: [...sizes.map(x => createIcon(x)), createIcon(maskedSize, true)],
    }),
  ];

  await Promise.all(promises);
})();
