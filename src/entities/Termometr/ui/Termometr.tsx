'use client';

import { useTermometr } from '../lib';
import { cvaRoot, cvaTick, cvaCircle, cvaTemperature } from './Termometr.style';
import { cn } from '@/shared/lib/utils';

type TermometrProps = {
  temperature: number;
  className?: string;
};

export function Termometr({ className, temperature }: TermometrProps) {
  const { displayHeight, currentColor } = useTermometr(temperature);

  return (
    <div className={cn(className, cvaRoot())}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between w-full">
          <div
            className={cvaTick()}
            style={{ backgroundColor: currentColor }}
          />
        </div>
      ))}
      <div className={cvaCircle()} style={{ backgroundColor: currentColor }} />
      <div
        className={cvaTemperature()}
        style={{
          height: `${displayHeight}px`,
          backgroundColor: currentColor,
        }}
      />
    </div>
  );
}
