import React from 'react'
import './Card.css'
import { CardContainer, InfoContainer } from './styles';

const Card = (props) => {
    const { name, image, status, species } = props.data;
    return (
        <CardContainer>
            <img src={image} alt="" />
            <InfoContainer>
                <span className="name">{name}</span>
                <label>{status}</label>
                <label>{species}</label>
            </InfoContainer>
        </CardContainer>
    )
}

export default Card;