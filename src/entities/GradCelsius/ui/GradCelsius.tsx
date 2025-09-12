import { cn } from '@/shared/lib/utils';

type GradCelsiusProps = {
  children: React.ReactNode;
  className?: string;
};

export function GradCelsius({
  children,
  className,
  ...props
}: GradCelsiusProps) {
  return (
    <span className={cn(className)} {...props}>
      {children}
      <sup>°C</sup>
    </span>
  );
}
