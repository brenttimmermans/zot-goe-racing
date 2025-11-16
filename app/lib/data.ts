import exifr from 'exifr';
import fs from 'fs/promises';
import path from 'path';

const IMAGES_PATH = path.resolve('public/images');

export const getImages = async (): Promise<string[]> => {
  const files = (await fs.readdir(IMAGES_PATH)).filter(
    filename => filename.endsWith('.jpg') || filename.endsWith('.jpeg'),
  );

  return files;
};

export interface ExifData {
  ExifImageWidth: number;
  ExifImageHeight: number;
}

type ExifProperty = keyof ExifData;

export async function getImagesExifProperties<K extends string>(
  images: string[],
  properties: ExifProperty[],
): Promise<Record<string, Partial<ExifData>>> {
  return Object.fromEntries(
    await Promise.all(
      images.map(async image => [
        image,
        await getImageExifProperties(image, properties),
      ]),
    ),
  );
}

async function getImageExifProperties<K extends string>(
  image: string,
  properties: ExifProperty[],
): Promise<Partial<ExifData>> {
  const filePath = path.resolve(IMAGES_PATH, image);
  const exif: Partial<ExifData> = await exifr.parse(filePath, properties);

  return exif;
}
