import styled from 'styled-components'
import Meditation from '../components/Icons/Meditation'
import Bike from '../components/Icons/Bike'
import Swim from '../components/Icons/Swim'
import BodyBuilding from '../components/Icons/Bodybuilding'

const SidebarWrapper = styled.div`
    height: 100vh;
    width: 117px;
    background-color: #000;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: -1;
`
const IconWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
`
const Copyright = styled.p`
    color: white;
    font-size: 12px;
    bottom: 60px;
    position: absolute;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    align-self: center;
`

function Sidebar() {
    const iconsList = [<Meditation />, <Bike />, <Swim />, <BodyBuilding />]

    return (
        <SidebarWrapper>
            <IconWrapper>
                {iconsList.map((icon, index) => (
                    <li key={index}>{icon}</li>
                ))}
            </IconWrapper>
            <Copyright>
                Copyright, SportSee {new Date().getFullYear()}
            </Copyright>
        </SidebarWrapper>
    )
}

export default Sidebar
