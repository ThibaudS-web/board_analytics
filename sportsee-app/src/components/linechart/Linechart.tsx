import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts'
import CustomTooltip from '../linechart/CustomTooltip'
import styled from 'styled-components'
import { SessionTimeWrapper } from '../../models/UserAverageSession'
import { colors } from '../../utils/colors'
import CustomDot from './Dot'

const BackgroundColor = styled.div`
    background-color: ${colors.linechart_background};
    border-radius: 5px;
`
const GraphLabel = styled.p`
    color: white;
    opacity: 0.5;
    font-size: 16px;
    width: 75%;
    padding: 30px 0 0 30px;
    line-height: 24px;
`
function Linechart(props: { sessionsAverage: SessionTimeWrapper[] }) {
    return (
        <BackgroundColor>
            <GraphLabel>Durée moyenne des sessions</GraphLabel>
            <LineChart width={260} height={180} data={props.sessionsAverage}>
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
        </BackgroundColor>
    )
}

export default Linechart
