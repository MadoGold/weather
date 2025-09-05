import { cvaRoot, cvaTitle, cvaTemperature, cvaDate } from './nowWeather.style';

export function NowWeather() {
  return (
    <div className={cvaRoot()}>
      <span className={cvaTitle()}>Thunderstorm</span>
      <span className={cvaTemperature()}>
        18<sup>°C</sup>
      </span>
      <span className={cvaDate()}>Sunday | 12 Dec 2024 - 11:43 PM</span>
    </div>
  );
}
