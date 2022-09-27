import { Payload } from 'recharts/types/component/DefaultTooltipContent'
import styled from 'styled-components'
import { colors } from '../../utils/colors'

const Value = styled.p`
    color: white;
    padding: 15px 5px 15px 5px;
    font-size: 12px;
    text-align: center;
    font-weight: 600;
`
const BackgroundColor = styled.div`
    background-color: ${colors.barchart.calories_burned};
`

function CustomTooltip(props: {
    active?: boolean
    payload?: Payload<number, string>[]
}) {
    if (props && props.active && props.payload && props.payload.length) {
        return (
            <BackgroundColor className="custom-tooltip">
                <Value
                    style={{
                        color: 'white',
                        padding: '15px 5px 15px 5px',
                        fontSize: '12px',
                        textAlign: 'center',
                    }}
                    className="label"
                >{`${props.payload[0]?.value ?? 'NaN'} kg`}</Value>
                <Value
                    style={{
                        color: 'white',
                        padding: '15px 5px 15px 5px',
                        fontSize: '12px',
                        textAlign: 'center',
                    }}
                    className="label"
                >{`${props.payload[1]?.value ?? 'NaN'} Kcal`}</Value>
            </BackgroundColor>
        )
    }

    return null
}

export default CustomTooltip
