import styled, {
    css,
    DefaultTheme,
    FlattenInterpolation,
    ThemedCssFunction,
} from 'styled-components'
import { colors } from '../../utils/colors'

import CaloriesSvg from './ui/CaloriesSvg'
import CarbohydratesSvg from './ui/CarbohydratesSvg'
import LipidsSvg from './ui/LipidsSvg'
import ProteinSvg from './ui/ProteinsSvg'

const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 124px;
    background-color: ${colors.barchart_background};
    padding: 32px 0 32px 32px;
    border-radius: 5px;
    @media (max-width: 1200px), (max-height: 850px) {
        padding: 25px 0 25px 15px;
    }
`
const MQFontSize: {
    css: FlattenInterpolation<ThemedCssFunction<DefaultTheme>>
} = {
    css: css`
        @media (max-width: 1200px), (max-height: 850px) {
            font-size: 14px;
        }
    `,
}

const InformationWrapper = styled.div`
    margin: 0 24px;
`
const Count = styled.p`
    font-size: 20px;
    margin-bottom: 5px;
    ${MQFontSize.css}
`
const Label = styled.p`
    color: #74798c;
    ${MQFontSize.css}
`

function NutrientCount(props: { count: string; type: string }) {
    function displaySVG() {
        const type = props.type
        switch (type) {
            case 'calorie':
                return <CaloriesSvg width={60} />
            case 'protein':
                return <ProteinSvg width={60} />
            case 'carbohydrate':
                return <CarbohydratesSvg width={60} />
            case 'lipid':
                return <LipidsSvg width={60} />
            default:
                return 'Unknown type'
        }
    }

    return (
        <BackgroundWrapper>
            {displaySVG()}
            <InformationWrapper>
                <Count>{props.count}</Count>
                <Label>Calories</Label>
            </InformationWrapper>
        </BackgroundWrapper>
    )
}

export default NutrientCount
