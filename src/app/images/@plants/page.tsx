import Card from '@/components/card/card';
import Link from 'next/link';

const PlantImages = () => {
  return (
    <Card>
      Plant Images
      <Link style={{ color: 'blue' }} href="/images/home">
        Sweet Home
      </Link>
    </Card>
  );
};

export default PlantImages;
