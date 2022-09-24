import React from 'react'
import styled from "styled-components"

const NavStyled = styled.nav`
    color: #FFFFFF;
    background-color: #F55A5A;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-bottom: 45px;
    position: sticky;
`

const ImgStyled = styled.img`
    margin-right: 5px;
`

export default function Navbar(){
    return(
        <NavStyled>
            <ImgStyled src="../images/earth.png" alt="Image of Planet Earth" />
            <p>my travel journal.</p>
        </NavStyled>
    )
    
}