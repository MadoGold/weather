import { ChevronRightIcon, MapPinIcon } from 'lucide-react';
import { cvaRoot } from './ChandeLocation.style';

export function ChangeLocation() {
  return (
    <div className={cvaRoot()}>
      <MapPinIcon size={25} />
      <span>New York</span>
      <ChevronRightIcon />
    </div>
  );
}
