import { cn } from '@/shared/lib';
import { cvaRoot } from './WeatherCard.style';

type WeatherCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function WeatherCard({ children, className }: WeatherCardProps) {
  return <div className={cn(cvaRoot(), className)}>{children}</div>;
}
