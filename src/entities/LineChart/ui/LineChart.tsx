import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from 'recharts';

type DataPoint = {
  label: string | React.ReactNode;
  value: number;
};

interface LineChartProps {
  data: DataPoint[];
  showLabels?: boolean;
}

export function LineChart({ data, showLabels = false }: LineChartProps) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="recharts-responsive-container" //только через css работает
    >
      <RechartsLineChart
        data={data}
        margin={{
          right: 15,
          left: 15,
          top: showLabels ? 25 : 5,
          bottom: showLabels ? 25 : 5,
        }}
      >
        {!showLabels && (
          <XAxis
            dataKey="label"
            type="category"
            interval={0}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'white',
              fontSize: 14,
              fontFamily: 'Inter, sans-serif',
            }}
          />
        )}

        <YAxis hide domain={['dataMin - 1', 'dataMax']} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="white"
          strokeWidth={2} // <-- толщина линии
          dot={props => {
            const { index, cx, cy } = props;
            if (index === 0 || index === data.length - 1) {
              return <circle cx={cx} cy={cy} r={4} fill="white" />;
            }
            return <circle r={0} cx={cx} cy={cy} fill="transparent" />;
          }}
          activeDot={false}
        >
          {showLabels && (
            <>
              <LabelList
                dataKey="temperatureLabel"
                position="top"
                offset={15}
                content={(props: any) => {
                  const { x, y, value } = props;
                  return (
                    <foreignObject x={x - 20} y={y - 30} width={40} height={20}>
                      <div className="flex justify-center">{value}</div>
                    </foreignObject>
                  );
                }}
              />
              <LabelList
                dataKey="timeIconLabel"
                position="bottom"
                offset={15}
                content={(props: any) => {
                  const { x, y, value } = props;
                  return (
                    <g>
                      {/* Вертикальная линия от точки графика к подписи */}
                      <line
                        x1={x}
                        y1={y}
                        x2={x}
                        y2={y + 30}
                        stroke="white"
                        strokeWidth={1}
                        opacity={0.3}
                      />
                      {/* Подпись времени и иконки */}
                      <foreignObject
                        x={x - 30}
                        y={y + 30}
                        width={60}
                        height={60}
                      >
                        <div className="flex justify-center">{value}</div>
                      </foreignObject>
                    </g>
                  );
                }}
              />
            </>
          )}
        </Line>
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
