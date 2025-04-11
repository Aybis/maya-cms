import LayoutCMS from '@/components/layout';
import Chatbot from '@/components/ui/chatbot/Chat';
import Header from '@/components/ui/dashboard/Header';

export default function Home() {
  return (
    <LayoutCMS>
      {/* Header Section */}
      <Header />

      {/* Content */}
      <Chatbot />
    </LayoutCMS>
  );
}
