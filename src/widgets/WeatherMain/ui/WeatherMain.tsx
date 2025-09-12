'use client';

import { WeatherCard } from '@/entities/WeatherCard';

import { IndoorWeather } from '@/features/weather/IndoorWeather';
import { BarometerWeather } from '@/features/weather/BarometerWeather';
import { MoonPhaseWeather } from '@/features/weather/MoonPhaseWeather';
import { HourlyForecast } from '@/features/weather/HourlyForecastWeather';
import { DayInfo } from '@/features/weather/DayInfo';

import {
  cvaRoot,
  cvaIndoor,
  cvaBarometer,
  cvaMoonPhase,
  cvaHourlyForecast,
  cvaDayInfo,
} from './WeatherMain.style';

export function WeatherMain() {
  const temperature = 18;
  const humidity = 32;

  return (
    <div className={cvaRoot()}>
      <WeatherCard className={cvaIndoor()}>
        <IndoorWeather temperature={temperature} humidity={humidity} />
      </WeatherCard>

      <WeatherCard className={cvaBarometer()}>
        <BarometerWeather temperature={temperature} />
      </WeatherCard>

      <WeatherCard className={cvaMoonPhase()}>
        <MoonPhaseWeather />
      </WeatherCard>

      <WeatherCard className={cvaDayInfo()}>
        <DayInfo />
      </WeatherCard>

      <WeatherCard className={cvaHourlyForecast()}>
        <HourlyForecast />
      </WeatherCard>
    </div>
  );
}
