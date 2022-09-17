import styled from 'styled-components'
import { colors } from '../../utils/colors'

import CaloriesSvg from './CaloriesSvg'
import CarbohydratesSvg from './CarbohydratesSvg'
import LipidsSvg from './Lipids'
import ProteinSvg from './ProteinsSvg'

// const centerChild = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// }

const BackgroundWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 124px;
    background-color: ${colors.barchart_background};
    padding: 32px 0 32px 32px;
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
            <div style={{ marginLeft: '24px' }}>
                <p style={{ fontSize: '20px', marginBottom: '5px' }}>
                    {props.count}
                </p>
                <p style={{ color: '#74798C' }}>Calories</p>
            </div>
        </BackgroundWrapper>
    )
}

export default NutrientCount
