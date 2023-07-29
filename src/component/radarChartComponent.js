import React, {useEffect} from "react";
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
        average: 9800,
        amt: 2400
    },
    {
        name: "온화",
        uv: 9000,
        average: 8000,
        amt: 2210
    },
    {
        name: "폭력",
        uv: 1500,
        average: 1500,
        amt: 2290
    },
    {
        name: "혐오",
        uv: 2000,
        average: 2000,
        amt: 2000
    },
    {
        name: "모욕",
        uv: 2200,
        average: 2200,
        amt: 2181
    },
];

export default function App({toxic, profanity, insult, derogatory, violent}) {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        setData((currData) => {
            // 새로운 데이터 배열 생성 (기존의 data2를 복사)
            const newData = [...data2];

            // props로 받은 값들을 새로운 데이터에 반영
            newData[0].average = 1-toxic;
            newData[1].average = 1-profanity;
            newData[2].average = violent;
            newData[3].average = derogatory;
            newData[4].average = insult;

            return newData;
        });
    }, [toxic, profanity, insult, derogatory, violent]);
    return (
        <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
                top: 100,
                right: 0,
                left: 70,
                bottom: -20
            }}
            barSize={30}
        >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis domain={[0, 1]} /> {/* 수직축 범위를 0부터 1까지로 설정 */}
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="average" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
    );
}
