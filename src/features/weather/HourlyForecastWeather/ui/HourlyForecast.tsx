import { TextWithIcon } from '@/entities/TextWithIcon';
import { cvaRoot } from './HourlyForecast.style';
import { LineChart } from '@/entities/LineChart';
import { Clock9Icon, CloudIcon } from 'lucide-react';

export function HourlyForecast() {
  const data = [
    {
      label: 'Now',
      value: 26,
      temperatureLabel: getTemperatureLabel('26°'),
      timeIconLabel: getTimeIconLabel('Now', <CloudIcon />, '11.7 km/h'),
    },
    {
      label: '22:00',
      value: 26,
      temperatureLabel: getTemperatureLabel('26°'),
      timeIconLabel: getTimeIconLabel('22:00', <CloudIcon />, '9.3 km/h'),
    },
    {
      label: '00:00',
      value: 22,
      temperatureLabel: getTemperatureLabel('22°'),
      timeIconLabel: getTimeIconLabel('00:00', <CloudIcon />, '12 km/h'),
    },
    {
      label: '2:00',
      value: 16,
      temperatureLabel: getTemperatureLabel('16°'),
      timeIconLabel: getTimeIconLabel('2:00', <CloudIcon />, '15 km/h'),
    },
    {
      label: '4:00',
      value: 20,
      temperatureLabel: getTemperatureLabel('20°'),
      timeIconLabel: getTimeIconLabel('4:00', <CloudIcon />, '15 km/h'),
    },
    {
      label: '6:00',
      value: 22,
      temperatureLabel: getTemperatureLabel('22°'),
      timeIconLabel: getTimeIconLabel('6:00', <CloudIcon />, '15 km/h'),
    },
    {
      label: '8:00',
      value: 16,
      temperatureLabel: getTemperatureLabel('16°'),
      timeIconLabel: getTimeIconLabel('8:00', <CloudIcon />, '15 km/h'),
    },
    {
      label: '10:00',
      value: 14,
      temperatureLabel: getTemperatureLabel('14°'),
      timeIconLabel: getTimeIconLabel('10:00', <CloudIcon />, '15 km/h'),
    },
  ];

  function getTemperatureLabel(temperature: string) {
    return <div className="text-white text-sm font-medium">{temperature}</div>;
  }

  function getTimeIconLabel(
    time: string,
    icon: React.ReactNode,
    speed: string
  ) {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="text-white">{icon}</div>
        <div className="text-white/70 text-xs">{time}</div>
        <div className="text-white/70 text-xs">{speed}</div>
      </div>
    );
  }

  return (
    <div className={cvaRoot()}>
      <TextWithIcon className="mb-50" icon={<Clock9Icon />}>
        12-hour forecast
      </TextWithIcon>
      <div className="relative h-100 mt-30">
        <LineChart data={data} showLabels={true} />
      </div>
    </div>
  );
}
