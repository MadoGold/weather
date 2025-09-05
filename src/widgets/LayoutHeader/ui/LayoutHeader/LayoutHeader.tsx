import { ChangeTheme } from '@/features/theme/changeTheme';
import { ChangeLocation } from '@/features/location/chandeLocation';
import { cvaRoot } from './LayoutHeader.style';
import { NowWeather } from '@/features/weather/nowWeather';

export function LayoutHeader() {
  return (
    <div className={cvaRoot()}>
      <div>
        <ChangeLocation />
        <NowWeather />
      </div>
      <div>
        <ChangeTheme />
      </div>
    </div>
  );
}
