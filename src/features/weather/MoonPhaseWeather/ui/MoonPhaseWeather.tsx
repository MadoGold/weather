import { Button } from '@/shared/ui/Button/Button';
import { cvaRoot } from './MoonPhaseWeather.style';
import { TextWithIcon } from '@/entities/TextWithIcon';
import { cvaMoonPhase, cvaMoonPhaseIcon } from './MoonPhaseWeather.style';
import { ChevronLeftIcon, ChevronRightIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { data } from '../utils/data';
import { transitionCSS } from '@/shared/transition/transition';

export function MoonPhaseWeather() {
  const radius = 286 / 2;
  const circleWidth = 80;
  const step = 360 / data.length;

  const [rotation, setRotation] = useState(0);
  const [showDebug, setShowDebug] = useState(false); // новое состояние

  const nextMoonPhase = () => {
    setRotation(prev => prev - step);
  };

  const prevMoonPhase = () => {
    setRotation(prev => prev + step);
  };

  // Повесим глобальные функции
  useEffect(() => {
    (window as any).showDebug = () => setShowDebug(true);
    (window as any).hideDebug = () => setShowDebug(false);

    return () => {
      delete (window as any).showDebug;
      delete (window as any).hideDebug;
    };
  }, []);

  return (
    <div className={cvaRoot()}>
      {showDebug && (
        <div className="debug-buttons-for-moon-phase">
          <Button onClick={prevMoonPhase} variant={'ghost'} size={'icon'}>
            <ChevronLeftIcon size={20} />
          </Button>
          <Button onClick={nextMoonPhase} variant={'ghost'} size={'icon'}>
            <ChevronRightIcon size={20} />
          </Button>
        </div>
      )}

      <TextWithIcon icon={<MoonIcon size={20} />}>Moon Phase</TextWithIcon>

      <div
        className={cvaMoonPhase()}
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <div
          className={cvaMoonPhaseIcon()}
          style={{
            position: 'relative',
            width: radius * 2,
            height: radius * 2,
            transform: `rotate(${rotation}deg)`,
            transition: transitionCSS.overshootSpring,
          }}
        >
          {data.map((item, index) => {
            const angle = index * step - 90;
            return (
              <div
                key={item.id}
                style={{
                  width: circleWidth,
                  height: circleWidth,
                  position: 'absolute',
                  left: radius - circleWidth / 2,
                  top: radius - circleWidth / 2,
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle - rotation}deg)`,
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '50%',
                  backgroundColor: 'transparent',
                  transition: transitionCSS.overshootSpring,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
