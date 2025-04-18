import LayoutCMS from '@/components/layout';
import Content from '@/components/ui/dashboard/Content';
import Header from '@/components/ui/dashboard/Header';
import Headline from '@/components/ui/dashboard/Headline';

export default function Home() {
  return (
    <LayoutCMS>
      {/* Header Section */}
      <Header />

      {/* Headline */}
      <Headline />

      {/* Content Section */}
      <Content />
    </LayoutCMS>
  );
}
