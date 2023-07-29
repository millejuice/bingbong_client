import React, { useState, useEffect } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";
import PropTypes from "prop-types";

export default function App({ toxic, profanity, insult, derogatory, violent }) {
    const [data, setData] = useState([
        {
            subject: "존중",
            A: 1,
            B: 0.0,
            fullMark: 1
        },
        {
            subject: "온화",
            A: 1,
            B: 0.0,
            fullMark: 1
        },
        {
            subject: "폭력적",
            A: 1,
            B: 0.0,
            fullMark: 1
        },
        {
            subject: "혐오",
            A: 1,
            B: 0.0,
            fullMark: 1
        },
        {
            subject: "모욕",
            A: 1,
            B: 0.0,
            fullMark: 1
        },
    ]);

    useEffect(() => {
        setData((prevData) => {
            const newData = prevData.map((item, index) => {
                switch (index) {
                    case 0:
                        return { ...item, B: 1-toxic };
                    case 1:
                        return { ...item, B: 1-profanity };
                    case 2:
                        return { ...item, B: violent };
                    case 3:
                        return { ...item, B: derogatory };
                    case 4:
                        return { ...item, B: insult };
                    default:
                        return item;
                }
            });
            return newData;
        });
    }, [toxic, profanity, insult, derogatory, violent]);

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
            <PolarRadiusAxis domain={[0, 1]} /> {/* 수직축 범위를 0부터 1까지로 설정 */}
            <Radar
                name="Mike"
                dataKey="B" // dataKey를 "B"로 설정하여 "B" 값으로 레이더 차트의 위치를 조절
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}

App.propTypes = {
    toxic: PropTypes.number,
    profanity: PropTypes.number,
    insult: PropTypes.number,
    derogatory: PropTypes.number,
    violent: PropTypes.number
};
