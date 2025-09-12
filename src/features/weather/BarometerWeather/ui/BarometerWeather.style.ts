import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['BarometerWeatherStyles-cvaRoot', 'flex flex-col'],
});

export const cvaPressure = cva({
  base: ['BarometerWeatherStyles-cvaPressure', 'text-xl font-medium'],
});

export const cvaLineChart = cva({
  base: ['BarometerWeatherStyles-cvaLineChart', 'mt-auto w-full h-80'],
});
