import React from 'react'
import styled from 'styled-components'
import Logo from '../Icons/Logo'
import { NavLink } from 'react-router-dom'

const HeaderWrapper = styled.header`
    background-color: #000000;
    width: auto;
    height: 91px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Navigation = styled.nav`
    width: 70%;
    margin-left: 10%;
`
const ListLinks = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`
const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: 500,
    color: isActive ? 'red' : '#fff',
    textDecoration: 'none',
    fontSize: '24px',
})

function Header() {
    return (
        <React.Fragment>
            <HeaderWrapper>
                <Logo />
                <Navigation>
                    <ListLinks>
                        <li>
                            <NavLink style={linkStyle} to="/">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={linkStyle} to="/">
                                Profil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={linkStyle} to="/">
                                Réglage
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={linkStyle} to="/">
                                Communauté
                            </NavLink>
                        </li>
                    </ListLinks>
                </Navigation>
            </HeaderWrapper>
        </React.Fragment>
    )
}

export default Header
