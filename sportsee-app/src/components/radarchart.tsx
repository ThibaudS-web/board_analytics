import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'
import { PerformanceRadarCharData } from '../models/user-performance/UserPerformance'
import { colors } from '../utils/colors'

const ChartWrapper = styled.div`
    background-color: ${colors.radarchart_background};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px 5px;
`

function Radarchart(props: {
    performance: PerformanceRadarCharData[]
    loaded: boolean
}) {
    return (
        <ChartWrapper>
            {props.loaded ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                        cx="50%"
                        cy="50%"
                        outerRadius="70%"
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
                        <Radar
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.7}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                'Loading'
            )}
        </ChartWrapper>
    )
}
export default Radarchart
