import React from "react";
import styled from "styled-components"
import { Link } from "gatsby";
import Img from "gatsby-image";


const ItemThumbnailStyled = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    background: linen;
    @media (max-width: 600px) {
        width: 100%;
      }
`

const Heading = styled.h3`
    font-size: 1.3em;
    padding: 10px;
    font-weight: 900;
    text-align: center;
    width: 100%;
    min-height: 85px;
    margin: auto;
    
`

const LinkStyled = styled(Link)`
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ImgStyled = styled(Img)`
    width: 350px;
    height: 350px;

    @media (max-width: 600px) {
        width: 100%;
      }


`

const itemThumbnail = (props) => {
    return (
        <ItemThumbnailStyled>
            <LinkStyled to={props.link}>    
                <ImgStyled fluid={props.image} />
                <Heading>{props.heading}</Heading>
            </LinkStyled>
            <p>£{props.price.toFixed(2)}</p>
        </ItemThumbnailStyled >
    )
}

export default itemThumbnail;