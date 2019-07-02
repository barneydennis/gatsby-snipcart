import React from "react";
import styled from "styled-components"

const BuyButtonStyled = styled.button`
  padding: 20px;
  background: gainsboro;
  font-weight: 700;
`

class BuyButton extends React.Component {
    state = {
        selected: null
    }

    render() {
        const item = this.props.item
        return (
            <BuyButtonStyled>
                <BuyButton
                    className='snipcart-add-item'
                    data-item-id={item.frontmatter.id}
                    data-item-price={item.frontmatter.price}
                    data-item-name={item.frontmatter.title}
                    data-item-description={item.frontmatter.description}
                    data-item-url={"https://gatsby-snipcart-demo.netlify.com" + item.fields.slug}>
                    Add to basket
        </BuyButton>
            </BuyButtonStyled>
        )
    }
}

export default BuyButton;