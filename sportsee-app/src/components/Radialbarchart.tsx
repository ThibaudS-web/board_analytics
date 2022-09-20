import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const ChartWrapper = styled.div`
    background-color: ${colors.barchart_background};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    position: relative;
`

const ScoreLabel = styled.p`
    align-self: flex-start;
`
const ScoreUser = styled.h3`
    text-align: center;
    line-height: 24px;
    @media (max-width: 1200px), (max-height: 850px) {
        font-size: 16px;
    }
`
const Text = styled.p`
    color: #74798c;
    line-height: 24px;
    @media (max-width: 1200px), (max-height: 850px) {
        font-size: 14px;
    }
`
const ScoreWrapper = styled.div`
    position: absolute;
    @media (max-width: 1200px), (max-height: 850px) {
        bottom: 33%;
    }
`
function Radialbarchart(props: { score: number | null; loaded: boolean }) {
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
        <ChartWrapper>
            {props.loaded ? (
                <>
                    <ScoreLabel>Score</ScoreLabel>
                    <ScoreWrapper>
                        <ScoreUser>12%</ScoreUser>
                        <Text>
                            de votre <br /> objectif
                        </Text>
                    </ScoreWrapper>
                    <ResponsiveContainer width="100%" height={180}>
                        <RadialBarChart
                            startAngle={90}
                            endAngle={450}
                            innerRadius="80%"
                            cx="50%"
                            cy="50%"
                            barSize={10}
                            data={data}
                        >
                            <RadialBar dataKey="value" cornerRadius={5} />
                        </RadialBarChart>
                    </ResponsiveContainer>
                </>
            ) : (
                'loading'
            )}
        </ChartWrapper>
    )
}

export default Radialbarchart
