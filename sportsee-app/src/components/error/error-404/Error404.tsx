import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../../utils/colors'
import Error404Svg from './Error404Svg'

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
function Error404() {
    return (
        <ErrorWrapper>
            <Error404Svg width={200} />
            <h1>
                Erreur <Code>404</Code> : La page demandée n'a pas été trouvé
                ...
            </h1>
            <Link to="/" style={linkStyle}>
                Cliquez pour être redirigé sur votre profil
            </Link>
        </ErrorWrapper>
    )
}

export default Error404
