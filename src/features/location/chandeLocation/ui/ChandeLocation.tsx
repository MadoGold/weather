import { ChevronRightIcon, MapPinIcon } from 'lucide-react';
import { Root } from './ChandeLocation.style';

export function ChangeLocation() {
  return (
    <div className={Root()}>
      <MapPinIcon />
      <span>New York</span>
      <ChevronRightIcon />
    </div>
  );
}
