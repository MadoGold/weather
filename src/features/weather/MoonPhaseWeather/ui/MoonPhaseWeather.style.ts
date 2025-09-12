import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['MoonPhaseWeatherStyles-cvaRoot'],
});

export const cvaMoonPhase = cva({
  base: [
    'MoonPhaseWeatherStyles-cvaMoonPhase',
    'absolute -bottom-1/2 -translate-y-20 left-1/2 -translate-x-1/2',
  ],
});

export const cvaMoonPhaseIcon = cva({
  base: ['MoonPhaseWeatherStyles-cvaMoonPhaseIcon', 'relative'],
});
