import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const BackgroundWrapper = styled.div`
    background-color: ${colors.barchart_background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 260px;
    border-radius: 10px;
    height: 260px;
`

const ScoreLabel = styled.p`
    align-self: flex-start;
`
const ScoreUser = styled.h3`
    text-align: center;
    line-height: 24px;
`
const Text = styled.p`
    color: #74798c;
    line-height: 24px;
`
const ScoreWrapper = styled.div`
    position: absolute;
`
function Radialbarchart(props: { score: number | null }) {
    const data = [
        {
            name: 'fullValue',
            value: 100,
            fill: 'transparent',
        },
        {
            name: 'userScore',
            value: props.score,
            fill: 'red',
        },
    ]
    return (
        <BackgroundWrapper>
            <ScoreLabel>Score</ScoreLabel>
            <ScoreWrapper>
                <ScoreUser>12%</ScoreUser>
                <Text>
                    de votre <br /> objectif
                </Text>
            </ScoreWrapper>

            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    startAngle={90}
                    endAngle={450}
                    innerRadius="80%"
                    barSize={10}
                    data={data}
                >
                    <RadialBar dataKey="value" cornerRadius={5} />
                </RadialBarChart>
            </ResponsiveContainer>
        </BackgroundWrapper>
    )
}

export default Radialbarchart
