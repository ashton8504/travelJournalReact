import React from "react"
import Navbar from "./components/Navbar"
import Card, {CardStyled} from "./components/Card"
import data from "./data"
import styled from "styled-components"

const Line = styled.hr`
    width: 35%;
    padding-right: 200px;
    margin:0 auto;
    text-align:center;
    height: 2px;
    background-color: #F5F5F5;
    border: none;
    &:border: {
        display: none;
    }
    
`

const CardContainer = styled.div`
    ${CardStyled}:after {
        content: " 🦄";
    }
`

export default function App(){
    return(
        <div>
            <Navbar />
            <CardContainer>{data.map((item) => 
                <Card item={item} key={item.id} />
            )}</CardContainer>
        </div>
    )
}