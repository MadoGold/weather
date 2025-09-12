import { useEffect, useState } from 'react';
import { calculateHeight, getTemperatureColor } from './termometrUtils';

interface UseTermometrReturn {
  displayHeight: number;
  currentColor: string;
}

export const useTermometr = (temperature: number): UseTermometrReturn => {
  const [displayHeight, setDisplayHeight] = useState(0);
  const [currentColor, setCurrentColor] = useState('#0B3D91');

  useEffect(() => {
    const targetHeight = calculateHeight(temperature);
    const targetColor = getTemperatureColor(temperature);

    setDisplayHeight(targetHeight);
    setCurrentColor(targetColor);
  }, [temperature]);

  return {
    displayHeight,
    currentColor,
  };
};
