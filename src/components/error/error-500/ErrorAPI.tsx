import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import Error404Svg from '../error-404/Error404Svg'

const ErrorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20vh auto;
    width: 800px;
    flex-direction: column;
    height: 250px;
`
const linkStyle = {
    color: colors.primary,
    fontSize: '20px',
}

const Code = styled.span`
    color: ${colors.primary};
`
const BigCode = styled.p`
    font-size: 90px;
    color: ${colors.primary};
    font-weight: 600;
`

function ErrorAPI() {
    return (
        <ErrorWrapper>
            <BigCode>500</BigCode>
            <h1>
                Erreur <Code>500</Code> : Serveur indisponible
            </h1>
            <Link to="/" style={linkStyle}>
                Cliquez pour être redirigé sur votre profil ou revenez plus tard
            </Link>
        </ErrorWrapper>
    )
}

export default ErrorAPI
