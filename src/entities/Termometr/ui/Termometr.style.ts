import { cva } from 'cva';

export const cvaRoot = cva({
  base: [
    'TermometrStyles-cvaRoot',
    'w-18 h-40 bg-foreground rounded-xs relative flex flex-col justify-between pt-8 pb-10 transition-all duration-500 ease-out',
    'relative',
  ],
});

export const cvaTick = cva({
  base: [
    'TermometrStyles-cvaTick',
    'w-1/6 h-px absolute right-0 -translate-x-[3px] rounded-full',
  ],
});

export const cvaCircle = cva({
  base: [
    'TermometrStyles-cvaCircle',
    'w-7 h-7 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2',
  ],
});

export const cvaTemperature = cva({
  base: [
    'TermometrStyles-cvaTemperature',
    'w-3 max-h-28 rounded-xs absolute bottom-7 left-1/2 -translate-x-1/2',
    'transition-all duration-500 ease-out',
  ],
});
