import styled from 'styled-components'
import Meditation from '../icons/Meditation'
import Bike from '../icons/Bike'
import Swim from '../icons/Swim'
import BodyBuilding from '../icons/Bodybuilding'

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
    @media (max-width: 1200px), (max-height: 850px) {
        width: 80px;
    }
`
const IconWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
const IconItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1200px), (max-height: 850px) {
        width: 70%;
    }
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
                    <IconItem key={index}>{icon}</IconItem>
                ))}
            </IconWrapper>
            <Copyright>
                Copyright, SportSee {new Date().getFullYear()}
            </Copyright>
        </SidebarWrapper>
    )
}

export default Sidebar
