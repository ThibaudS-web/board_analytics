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
import SessionTimeWrapper from '../../UI/wrappers/SessionTimeWrapper'
import { colors } from '../../utils/colors'
import CustomDot from './Dot'
import Loader from '../Loader'

const ChartWrapper = styled.div`
    background-color: ${colors.linechart_background};
    border-radius: 5px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const GraphLabel = styled.p<IBtn>`
    color: white;
    opacity: 0.5;
    font-size: 16px;
    padding: 30px 0 0 30px;
    line-height: 24px;
    align-self: flex-start;
    margin-bottom: ${(props) => (props.loaded ? '0px' : '35px')};
    @media (max-width: 1200px), (max-height: 850px) {
        padding: 20px 0 0 15px;
    }
`
interface IBtn {
    loaded: boolean
}

function Linechart(props: {
    sessionsAverage: SessionTimeWrapper[]
    loaded: boolean
}) {
    return (
        <>
            <ChartWrapper>
                <GraphLabel loaded={props.loaded}>
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
                    <Loader />
                )}
            </ChartWrapper>
        </>
    )
}

export default Linechart
