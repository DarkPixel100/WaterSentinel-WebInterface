// Teste de gráfico de área com dados de turbidez
// Temporário, será substituído por dados e uma estrutura real
import sourceData from "../data/testdata.json";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import data from "../data/testdata.json";
let colors = ["#d400ff", "#0204ff", "#2fff1f"];

function TurbidityChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Legend />
        {colors.map((element, index) => {
          return (
            <Area
              type="monotone"
              dataKey={`prod${index + 1}`}
              stroke={colors[index]}
              fill={colors[index]}
              stackId={index + 1}
            />
          );
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{label}</p>
        {payload.map((element) => {
          return (
            <p
              className="Info"
              style={{ color: colors[element.name[element.name.length - 1] - 1] }}
            >
              {element.name} : {element.value}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
};

export default TurbidityChart;
