import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";

const data = [
    {
        subject: "존중",
        A: 120,
        B: 1000,
        fullMark: 150
    },
    {
        subject: "온화",
        A: 100,
        B: 60,
        fullMark: 150
    },
    {
        subject: "폭력적",
        A: 30,
        B: 20,
        fullMark: 150
    },
    {
        subject: "혐오",
        A: 40,
        B: 40,
        fullMark: 150
    },
    {
        subject: "모욕",
        A: 50,
        B: 40,
        fullMark: 150
    },
];

export default function App() {
    return (
        <RadarChart
            cx={200}
            cy={200}
            outerRadius={150}
            width={400}
            height={400}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}
