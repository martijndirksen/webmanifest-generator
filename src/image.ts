import sharp from 'sharp';
import ico from 'sharp-ico';

export async function createImage(
  inputFilePath: string,
  {
    width,
    height,
    outputFileName,
  }: {
    width: number;
    height: number;
    outputFileName: string;
  },
) {
  console.log(inputFilePath);
  return sharp(inputFilePath).resize(width, height).toFile(outputFileName);
}

export async function createFavicon(inputFilePath: string) {
  ico.sharpsToIco([sharp(inputFilePath)], 'favicon.ico', {
    sizes: [150],
    resizeOptions: {},
  });
}
