import { Payload } from 'recharts/types/component/DefaultTooltipContent'
import styled from 'styled-components'

const BackgroundColor = styled.div`
    background-color: white;
`
const Value = styled.p`
    padding: 7px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
`

function CustomTooltip(props: {
    active?: boolean
    payload?: Payload<number, string>[]
}) {
    if (props && props.active && props.payload && props.payload.length) {
        return (
            <BackgroundColor className="custom-tooltip">
                <Value className="label">{`${
                    props.payload[0]?.value ?? 'NaN'
                } min`}</Value>
            </BackgroundColor>
        )
    }

    return null
}

export default CustomTooltip
