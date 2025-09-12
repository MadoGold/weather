import { HeartIcon } from 'lucide-react';
import { TextWithIcon } from '@/entities/TextWithIcon';
import { GradCelsius } from '@/entities/GradCelsius';
import { Termometr } from '@/entities/Termometr/ui/Termometr';
import {
  cvaTemperature,
  cvaHumidityText,
  cvaTemperatureContainer,
  cvaHumidityTextContainer,
  cvaRoot,
} from './IndoorWeather.style';
import { svgDroplet } from '@/shared/icons/icons';

interface IndoorWeatherProps {
  temperature: number;
  humidity: number;
}

export function IndoorWeather({ temperature, humidity }: IndoorWeatherProps) {
  return (
    <div className={cvaRoot()}>
      <TextWithIcon icon={<HeartIcon fill="currentColor" size={22} />}>
        Indoor
      </TextWithIcon>

      <div className={cvaTemperatureContainer()}>
        <Termometr temperature={temperature} />
        <GradCelsius className={cvaTemperature()}>
          <span>{temperature}</span>
        </GradCelsius>
      </div>

      <TextWithIcon
        className={cvaHumidityTextContainer()}
        icon={svgDroplet(25)}
      >
        <div className={cvaHumidityText()}>
          <span className="text-sm">Humid</span>
          <span className="text-lg">
            {humidity}
            <span className="text-base leading-none">%</span>
          </span>
        </div>
      </TextWithIcon>
    </div>
  );
}
