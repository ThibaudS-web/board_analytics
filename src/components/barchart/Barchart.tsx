import SessionActivityWrapper from '../../UI/wrappers/SessionActivityWrapper'
import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from 'recharts'
import { colors } from '../../utils/colors'

import CustomTooltip from './CustomTooltip'
import styled from 'styled-components'
import Loader from '../Loader'

const ChartWrapper = styled.div`
    width: 100%;
    background-color: ${colors.barchart_background};
    height: 30vh;
    padding: 20px 30px 20px 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 25px;
`

const Title = styled.p`
    font-weight: bold;
    font-size: 14px;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
const Legend = styled.ul`
    display: flex;
    list-style: none;
    font-size: 12px;
`
const Label = styled.li`
    color: #74798c;
    display: flex;
    margin-right: 30px;
`
const pointGlobalStyle = {
    marginRight: '10px',
    alignSelf: 'center',
    width: '8px',
    height: ' 8px',
    borderRadius: '50%',
}
const DotKg = styled.div`
    ${pointGlobalStyle}
    background-color: ${colors.barchart.weight};
`
const DotKcal = styled.div`
    ${pointGlobalStyle}
    background-color: ${colors.barchart.calories_burned};
`

function ChartBar(props: {
    sessions: SessionActivityWrapper[]
    loaded: boolean
}) {
    return (
        <ChartWrapper>
            <Header>
                <Title>Activité quotidienne</Title>
                <Legend>
                    <Label>
                        <DotKg />
                        Poids (kg)
                    </Label>
                    <Label>
                        <DotKcal />
                        Calories brûlées (Kcal)
                    </Label>
                </Legend>
            </Header>
            {props.loaded ? (
                <ResponsiveContainer width="100%" height="70%">
                    <BarChart data={props.sessions}>
                        <CartesianGrid strokeDasharray="2 2" vertical={false} />
                        <XAxis
                            tick={{
                                fontSize: '12px',
                            }}
                            tickLine={false}
                            dataKey="day"
                        />
                        <YAxis
                            tick={{
                                fontSize: '12px',
                            }}
                            tickCount={3}
                            axisLine={false}
                            tickLine={false}
                            orientation={'right'}
                            yAxisId={1}
                            dataKey={'kilogram'}
                            domain={['dataMin - 5', 'auto']}
                        />
                        <YAxis
                            hide
                            yAxisId={2}
                            dataKey={'calories'}
                            domain={['dataMin - 100', 'dataMax + 100']}
                        />
                        <Tooltip offset={60} content={<CustomTooltip />} />
                        <Bar
                            unit={'kg'}
                            yAxisId={1}
                            radius={[10, 10, 0, 0]}
                            barSize={7}
                            dataKey="kilogram"
                            fill={colors.barchart.weight}
                        />
                        <Bar
                            unit={'Kcal'}
                            yAxisId={2}
                            radius={[10, 10, 0, 0]}
                            barSize={7}
                            dataKey="calories"
                            fill={colors.barchart.calories_burned}
                        />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <div style={{ alignSelf: 'center', marginBottom: '80px' }}>
                    <Loader />
                </div>
            )}
        </ChartWrapper>
    )
}

export default ChartBar
