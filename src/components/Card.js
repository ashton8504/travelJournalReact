import React from 'react'
import styled from "styled-components"

export const CardStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
    width: 100%;
    height: 220px;
    padding-left: 50px;
`

const Photo = styled.img`
    width: 175px;
    border-radius: 5px;
    margin-top: 8px;
    height: 90%;
    margin-bottom: 10px;
`

const CardItems = styled.div`
    font-size: 18px;
`
const TravelStyled = styled.div`
    display: flex;
`

const TravelImage = styled.img`
    width: 8px;
    height: 10px;
    margin-left: 20px;
    margin-top: 10px;
`

const TravelLocation = styled.p`
    padding: 7px;
    font-size: 16px;
`

const GoogleMaps = styled.a`
    padding: 10px;
    text-decoration-line: underline;
    color: #918E9B;
    font-size: 13px;
`

const LocationTitle = styled.h1`
    width: 326px;
    font-size: 25px;
    color: #2B283A;
    padding-left: 18px;
`

const LocationDescription = styled.p`
    width: 326px;
    font-size: 10.24px;
    color: #2B283A;
    padding-left: 18px;
`

const TravelDates = styled.p`
    width: 319px;
    color: #2B283A;
    padding: 5px 20px;
`



export default function Card(props){
    return(
       <CardStyled>
          <Photo src={props.item.imageUrl} />
          <CardItems> 
            <TravelStyled>
                <TravelImage src="./images/location_sign.png" alt={`picture of ${props.item.title}`}/>
                <TravelLocation>{props.item.location}</TravelLocation>
                <GoogleMaps href={props.item.googleMapsUrl}>Google Maps</GoogleMaps>
            </TravelStyled>
          <LocationTitle>{props.item.title} </LocationTitle>
          <TravelDates>{props.item.startDate} - {props.item.endDate}</TravelDates>
          <LocationDescription>{props.item.description}</LocationDescription>
          </CardItems>
      </CardStyled>
      
    )
}