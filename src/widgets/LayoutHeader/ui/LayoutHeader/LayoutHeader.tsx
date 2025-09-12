import { ChangeTheme } from '@/features/theme/changeTheme';
import { ChangeLocation } from '@/features/location/chandeLocation';
import { cvaRoot } from './LayoutHeader.style';
import { NowWeather } from '@/features/weather/nowWeather';

export function LayoutHeader() {
  return (
    <div className={cvaRoot()}>
      <div className="flex items-center justify-between gap-30">
        <ChangeLocation />
        <ChangeTheme />
      </div>
      <NowWeather />
    </div>
  );
}
