import { cvaRoot, cvaTitle, cvaTemperature, cvaDate } from './nowWeather.style';
import { GradCelsius } from '@/entities/GradCelsius';

export function NowWeather() {
  return (
    <div className={cvaRoot()}>
      <span className={cvaTitle()}>Thunderstorm</span>
      <span className={cvaTemperature()}>
        <GradCelsius>18</GradCelsius>
      </span>
      <span className={cvaDate()}>Sunday | 12 Dec 2024 - 11:43 PM</span>
    </div>
  );
}
