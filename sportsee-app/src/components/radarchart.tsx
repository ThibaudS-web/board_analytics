import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
} from 'recharts'
import styled from 'styled-components'
import { PerformanceRadarCharData } from '../models/user-performance/UserPerformance'
import { colors } from '../utils/colors'

const BackgroundColor = styled.div`
    background-color: ${colors.radarchart_background};
    border-radius: 5px;
    padding: 0 10px 0 10px;
`
function Radarchart(props: { performance: PerformanceRadarCharData[] }) {
    return (
        <BackgroundColor>
            <RadarChart
                outerRadius={90}
                width={240}
                height={260}
                data={props.performance}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    tick={{
                        fontSize: '12px',
                        fontWeight: '200',
                        strokeWidth: 0,
                        fill: 'white',
                    }}
                    dataKey="label"
                />
                <PolarRadiusAxis
                    axisLine={false}
                    tick={false}
                    angle={30}
                    domain={[0, 220]}
                />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
            </RadarChart>
        </BackgroundColor>
    )
}
export default Radarchart
