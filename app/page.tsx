import Image from '@/app/components/Image/Image';
import styles from './page.module.css';
import { getImages, getImagesExifProperties } from './lib/data';

export default async function Home() {
  const files = await getImages();
  const metadata = await getImagesExifProperties(files, [
    'ExifImageWidth',
    'ExifImageHeight',
  ]);

  return (
    <div className={styles.grid}>
      {Object.entries(metadata).map(([image, exif]) => {
        const isHorizontal =
          (exif.ExifImageWidth ?? 0) > (exif.ExifImageHeight ?? 0);

        const width = isHorizontal ? 600 : 400;
        const height = isHorizontal ? 400 : 600;

        return (
          <Image
            key={image}
            src={`/images/${image}`}
            className={isHorizontal ? styles.horizontal : styles.vertical}
            alt={image}
            width={width}
            height={height}
          />
        );
      })}
    </div>
  );
}
