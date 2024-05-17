import Card from '@/components/card/card';
import Link from 'next/link';

const FurnitureImages = () => {
  return (
    <Card>
      Furniture Images
      <Link style={{ color: 'blue' }} href="/images/home">
        Sweet Home
      </Link>
    </Card>
  );
};

export default FurnitureImages;
