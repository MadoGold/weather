import { cn } from '@/shared/lib/utils';

type PressureProps = {
  children: React.ReactNode;
  className?: string;
};

export function Pressure({ children, className, ...props }: PressureProps) {
  return (
    <span className={cn(className)} {...props}>
      {children}
      <sup>Hg</sup>
    </span>
  );
}
