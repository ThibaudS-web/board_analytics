import {
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    ResponsiveContainer,
} from 'recharts'
import CustomTooltip from '../linechart/CustomTooltip'
import styled from 'styled-components'
import { SessionTimeWrapper } from '../../models/UserAverageSession'
import { colors } from '../../utils/colors'
import CustomDot from './Dot'

const ChartWrapper = styled.div`
    background-color: ${colors.linechart_background};
    border-radius: 5px;
    width: 100%;
    height: 100%;
`
const GraphLabel = styled.p`
    color: white;
    opacity: 0.5;
    font-size: 16px;
    padding: 30px 0 0 30px;
    line-height: 24px;
    @media (max-width: 1200px), (max-height: 850px) {
        padding: 20px 0 0 15px;
    }
`
function Linechart(props: {
    sessionsAverage: SessionTimeWrapper[]
    loaded: boolean
}) {
    return (
        <>
            <ChartWrapper>
                <GraphLabel>
                    Durée moyenne des <br />
                    sessions
                </GraphLabel>
                {props.loaded ? (
                    <ResponsiveContainer width="100%" height={180}>
                        <LineChart height={270} data={props.sessionsAverage}>
                            <XAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: 'white',
                                    opacity: 0.5,
                                    strokeWidth: 0,
                                    fontSize: '12px',
                                }}
                                padding={{ left: 20, right: 20 }}
                                dataKey="day"
                            />
                            <YAxis
                                hide
                                padding={{ bottom: 30 }}
                                type="number"
                                domain={['dataMin', 'dataMax + 5']}
                            />
                            <Tooltip offset={30} content={<CustomTooltip />} />
                            <Line
                                activeDot={<CustomDot />}
                                dot={false}
                                strokeWidth={2}
                                dataKey="sessionLength"
                                stroke="white"
                                type="natural"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    'loading'
                )}
            </ChartWrapper>
        </>
    )
}

export default Linechart
