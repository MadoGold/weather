import { cva } from 'cva';

export const cvaRoot = cva({
  base: ['IndoorWeatherStyles-cvaRoot', 'flex flex-col gap-20'],
});

export const cvaTemperature = cva({
  base: ['IndoorWeatherStyles-cvaTemperature', 'text-xl font-medium'],
});

export const cvaHumidityText = cva({
  base: ['IndoorWeatherStyles-cvaHumidityText', 'flex flex-col gap-12'],
});

export const cvaTemperatureContainer = cva({
  base: [
    'IndoorWeatherStyles-cvaTemperatureContainer',
    'flex items-center gap-25',
  ],
});

export const cvaHumidityTextContainer = cva({
  base: ['IndoorWeatherStyles-cvaHumidityTextContainer', 'items-start gap-25'],
});
