import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data2 = [
    {
        name: "존중",
        uv: 9800,
        pv: 9800,
        amt: 2400
    },
    {
        name: "온화",
        uv: 9000,
        pv: 8000,
        amt: 2210
    },
    {
        name: "폭력",
        uv: 1500,
        pv: 1500,
        amt: 2290
    },
    {
        name: "혐오",
        uv: 2000,
        pv: 2000,
        amt: 2000
    },
    {
        name: "모욕",
        uv: 2200,
        pv: 2200,
        amt: 2181
    },
];

export default function App() {
    return (
        <BarChart
            width={300}
            height={300}
            data={data2}
            margin={{
                top: 100,
                right: 0,
                left: 70,
                bottom: -20
            }}
            barSize={30}
        >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
    );
}
