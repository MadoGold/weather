import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['NowWeatherStyles-cvaRoot', 'flex flex-col'],
});

export const cvaTitle = cva({
  base: ['NowWeatherStyles-cvaTitle', 'text-lg font-semibold', 'mb-32'],
});

export const cvaTemperature = cva({
  base: ['NowWeatherStyles-cvaTemperature', 'text-2xl font-medium', 'mb-12'],
});

export const cvaDate = cva({
  base: ['NowWeatherStyles-cvaDate', 'text-sm'],
});
