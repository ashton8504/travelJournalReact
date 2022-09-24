import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
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

export default function App(){
    const cards = data.map((item) => {
        return (
             <React.Fragment key={item.id}>
               <Card item={item}/>
               <Line />
             </React.Fragment>
             
        )
    })
    
    return(
        <div>
            <Navbar />
            {cards}
        </div>
    )
}