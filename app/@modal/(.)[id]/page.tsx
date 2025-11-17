import { getImages, getImageExifProperties } from '@/app/lib/data';
import { redirect } from 'next/navigation';
import ImageDetailModal from './ImageDetailModal';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ImageDetailModalContainer({ params }: Props) {
  const { id: image } = await params;

  const files = await getImages();
  let exif;
  try {
    exif = await getImageExifProperties(image, [
      'ExifImageWidth',
      'ExifImageHeight',
    ]);
  } catch (error) {
    redirect('/');
  }

  const getNextImage = (file: string) => {
    const index = files.indexOf(file);
    const nextIndex = index === files.length - 1 ? 0 : index + 1;

    return files[nextIndex];
  };

  const getPreviousImage = (file: string) => {
    const index = files.indexOf(file);
    const previousIndex = index === 0 ? files.length - 1 : index - 1;

    return files[previousIndex];
  };

  const width = exif.ExifImageWidth ?? 0;
  const height = exif.ExifImageHeight ?? 0;

  return (
    <ImageDetailModal
      name={image}
      width={width}
      height={height}
      previous={getPreviousImage(image)}
      next={getNextImage(image)}
    />
  );
}
