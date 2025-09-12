import { Gauge, DropletIcon } from 'lucide-react';
import { LineChart } from '@/entities/LineChart/ui/LineChart';
import { cvaRoot, cvaPressure, cvaLineChart } from './BarometerWeather.style';
import { TextWithIcon } from '@/entities/TextWithIcon';
import { Pressure } from '@/entities/Pressure';
import { svgDroplet } from '@/shared/icons/icons';

interface BarometerWeatherProps {
  temperature: number;
}

export function BarometerWeather({ temperature }: BarometerWeatherProps) {
  const data = [
    {
      label: '23.5',
      value: 23.5,
    },
    {
      label: '22.9',
      value: 22.9,
    },
    {
      label: '22.3',
      value: 22.3,
    },
    {
      label: '22.8',
      value: 22.8,
    },
    {
      label: '22.9',
      value: 22.9,
    },
    {
      label: '23.3',
      value: 23.3,
    },
    {
      label: '23.2',
      value: 23.2,
    },
    {
      label: '22.3',
      value: 22.3,
    },
  ];

  return (
    <div className={cvaRoot()}>
      <TextWithIcon className="mb-35" icon={<Gauge size={20} />}>
        Barometer
      </TextWithIcon>
      <div className="flex items-center gap-25 mb-25">
        <DropletIcon fill="currentColor" size={40} />
        <Pressure className={cvaPressure()}>
          <span>{temperature}</span>
        </Pressure>
      </div>
      <div className={cvaLineChart()}>
        <LineChart data={data} />
      </div>
    </div>
  );
}
