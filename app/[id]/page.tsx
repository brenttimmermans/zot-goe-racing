import Image from '@/app/components/Image/Image';
import { getImageExifProperties } from '@/app/lib/data';
import { redirect } from 'next/navigation';
import styles from './page.module.css';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ImageDetailPage({ params }: Props) {
  const { id: image } = await params;

  let exif;
  try {
    exif = await getImageExifProperties(image, [
      'ExifImageWidth',
      'ExifImageHeight',
    ]);
  } catch (error) {
    redirect(`/`);
  }

  const width = exif.ExifImageWidth ?? 0;
  const height = exif.ExifImageHeight ?? 0;

  return (
    <section className={styles.container}>
      <Image
        src={`/images/${image}`}
        alt={image}
        width={width}
        height={height}
        className={styles.image}
        // Force style priority over className
        style={{ width: 'auto', height: 'auto' }}
      />
    </section>
  );
}
