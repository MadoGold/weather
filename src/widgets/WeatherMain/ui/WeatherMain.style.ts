import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['WeatherMainStyles-cvaRoot', 'grid grid-cols-4 grid-rows-2 gap-30'],
});

export const cvaIndoor = cva({
  base: ['WeatherMainStyles-cvaIndoor', 'flex flex-col gap-30'],
});

export const cvaBarometer = cva({
  base: ['WeatherMainStyles-cvaBarometer', 'flex flex-col'],
});

export const cvaMoonPhase = cva({
  base: ['WeatherMainStyles-cvaMoonPhase', 'relative overflow-hidden'],
});

export const cvaHourlyForecast = cva({
  base: ['WeatherMainStyles-cvaHourlyForecast', 'col-span-3'],
});

export const cvaDayInfo = cva({
  base: ['WeatherMainStyles-cvaDayInfo', 'col-span-1 row-span-2'],
});
