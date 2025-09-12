import { LayoutHeader } from '@/widgets/LayoutHeader';
import { WeatherMain } from '@/widgets/WeatherMain';
import Image from 'next/image';

export function MainPage() {
  return (
    <main className="container">
      <Image
        src="/img/bg/thunder.jpg"
        alt="Background"
        fill
        className="max-w-full max-h-full object-cover -z-10"
      />
      <LayoutHeader />
      <WeatherMain />
    </main>
  );
}
