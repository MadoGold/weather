export interface WeatherCardData {
  id: string;
  title: string;
  data: {
    temperature?: string;
    humidity?: string;
    pressure?: {
      current: string;
      history: string[];
    };
    moonPhase?: string;
    forecast?: {
      hours: Array<{
        time: string;
        temperature: string;
        windSpeed: string;
      }>;
    };
    days?: Array<{
      day: string;
      time: string;
      conditions: string;
      realFeel: string;
      wind: string;
      rainChance: string;
      uvIndex: string;
    }>;
  };
}

export const weatherCardsData: WeatherCardData[] = [
  {
    id: 'indoor',
    title: 'Indoor',
    data: {
      temperature: '24',
      humidity: 'Humid 20%',
    },
  },
  {
    id: 'barometer',
    title: 'Barometer',
    data: {
      pressure: {
        current: '23.6',
        history: [
          '23.5',
          '22.9',
          '22.3',
          '22.8',
          '22.9',
          '23.3',
          '23.2',
          '22.3',
        ],
      },
    },
  },
  {
    id: 'moon-phase',
    title: 'Moon Phase',
    data: {
      moonPhase: 'active',
    },
  },
  {
    id: 'forecast',
    title: '12-hour forecast',
    data: {
      forecast: {
        hours: [
          { time: 'Now', temperature: '26', windSpeed: '9.3km/h' },
          { time: '22:00', temperature: '26', windSpeed: '11.7km/h' },
          { time: '00:00', temperature: '22', windSpeed: '12km/h' },
          { time: '2:00', temperature: '16', windSpeed: '15km/h' },
          { time: '4:00', temperature: '20', windSpeed: '15km/h' },
          { time: '6:00', temperature: '22', windSpeed: '15km/h' },
          { time: '8:00', temperature: '16', windSpeed: '15km/h' },
          { time: '10:00', temperature: '14', windSpeed: '15km/h' },
        ],
      },
    },
  },
  {
    id: 'days',
    title: 'Days',
    data: {
      days: [
        {
          day: 'FRI',
          time: '8:00PM GMT',
          conditions: 'AIR CONDITIONS',
          realFeel: '30',
          wind: '0.8 km/hr',
          rainChance: '2%',
          uvIndex: '4',
        },
        {
          day: 'SAT',
          time: '8:00PM GMT',
          conditions: 'AIR CONDITIONS',
          realFeel: '30',
          wind: '0.8 km/hr',
          rainChance: '2%',
          uvIndex: '4',
        },
        {
          day: 'SUN',
          time: '8:00PM GMT',
          conditions: 'AIR CONDITIONS',
          realFeel: '30',
          wind: '0.8 km/hr',
          rainChance: '2%',
          uvIndex: '4',
        },
        {
          day: 'MON',
          time: '8:00PM GMT',
          conditions: 'AIR CONDITIONS',
          realFeel: '30',
          wind: '0.8 km/hr',
          rainChance: '2%',
          uvIndex: '4',
        },
        {
          day: 'TUES',
          time: '8:00PM GMT',
          conditions: 'AIR CONDITIONS',
          realFeel: '30',
          wind: '0.8 km/hr',
          rainChance: '2%',
          uvIndex: '4',
        },
      ],
    },
  },
];
