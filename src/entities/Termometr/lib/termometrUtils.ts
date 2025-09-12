// Константы для термометра
export const TERMOMETER_CONFIG = {
  MIN_TEMP: -10,
  MAX_TEMP: 30,
  MAX_HEIGHT: 28, // h-28 в системе spacing
  MIN_HEIGHT: 2, // минимальная видимая высота
} as const;

// Цветовая палитра от синего к красному
export const TEMPERATURE_COLORS = [
  '#0B3D91', // -10°C
  '#2374C6', // -5°C
  '#4DA6E0', // 0°C
  '#86C1B8', // 5°C
  '#B6D86A', // 10°C
  '#F0D35A', // 15°C
  '#F4A84A', // 20°C
  '#F07A36', // 25°C
  '#D93B2B', // 30°C
] as const;

/**
 * Рассчитывает высоту столбца термометра на основе температуры
 */
export const calculateHeight = (temp: number): number => {
  const { MIN_TEMP, MAX_TEMP, MAX_HEIGHT, MIN_HEIGHT } = TERMOMETER_CONFIG;

  // Ограничиваем температуру в диапазоне
  const clampedTemp = Math.max(MIN_TEMP, Math.min(MAX_TEMP, temp));

  // Нормализуем от 0 до 1
  const normalizedTemp = (clampedTemp - MIN_TEMP) / (MAX_TEMP - MIN_TEMP);

  // Рассчитываем высоту
  return Math.max(MIN_HEIGHT, normalizedTemp * MAX_HEIGHT);
};

/**
 * Получает цвет на основе температуры с интерполяцией
 */
export const getTemperatureColor = (temp: number): string => {
  const { MIN_TEMP, MAX_TEMP } = TERMOMETER_CONFIG;
  const clampedTemp = Math.max(MIN_TEMP, Math.min(MAX_TEMP, temp));
  const normalizedTemp = (clampedTemp - MIN_TEMP) / (MAX_TEMP - MIN_TEMP);

  // Интерполяция между цветами
  const colorIndex = normalizedTemp * (TEMPERATURE_COLORS.length - 1);
  const lowerIndex = Math.floor(colorIndex);
  const upperIndex = Math.min(lowerIndex + 1, TEMPERATURE_COLORS.length - 1);
  const ratio = colorIndex - lowerIndex;

  if (lowerIndex === upperIndex) {
    return TEMPERATURE_COLORS[lowerIndex];
  }

  // Интерполяция RGB
  const lowerColor = TEMPERATURE_COLORS[lowerIndex];
  const upperColor = TEMPERATURE_COLORS[upperIndex];

  const r1 = parseInt(lowerColor.slice(1, 3), 16);
  const g1 = parseInt(lowerColor.slice(3, 5), 16);
  const b1 = parseInt(lowerColor.slice(5, 7), 16);

  const r2 = parseInt(upperColor.slice(1, 3), 16);
  const g2 = parseInt(upperColor.slice(3, 5), 16);
  const b2 = parseInt(upperColor.slice(5, 7), 16);

  const r = Math.round(r1 + (r2 - r1) * ratio);
  const g = Math.round(g1 + (g2 - g1) * ratio);
  const b = Math.round(b1 + (b2 - b1) * ratio);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};
