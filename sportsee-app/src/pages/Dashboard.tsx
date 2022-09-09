import styled from 'styled-components'

const ProfilWrapper = styled.div`
    margin: 70px 0 0 220px;
`

const WelcomeUser = styled.h1`
    font-size: 48px;
`
const Username = styled.span`
    color: #ff0101;
`

function Dashboard() {
    return (
        <ProfilWrapper>
            <WelcomeUser>
                Bonjour <Username>Thomas</Username>
            </WelcomeUser>
        </ProfilWrapper>
    )
}

export default Dashboard
