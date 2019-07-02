import React from "react";
import styled from "styled-components"
import { GlobalStyle } from '../styles/globalStyle';

import HeaderMain from './Headers/HeaderMain';
import HeaderMinor from './Headers/HeaderMinor';


const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 600px) {
    width: 90%;
  }
`

const MainSection = styled.main`
  margin: 30px 0;
  width: 100%;
`

const FooterStyled = styled.footer`
  width: 100%;
  padding: 20px;
  text-align: right;
`



class Layout extends React.Component {
  
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure('show_continue_shopping', true);
      //console.log('yay', cart)

    }
    console.log('window', window)
  }


  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const siteName = "Gwen's Cake Shop"
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderMain shopName={siteName}>
        </HeaderMain>
      )
    } else {
      header = (
        <HeaderMinor shopName={siteName}>
        </HeaderMinor>
      )
    }

    return (
      <PageWrapper>
        <GlobalStyle />
        {header}
        <MainSection>{children}</MainSection>
        <FooterStyled>
          <strong>Gatsby Snipcart Starter</strong> - Made by Issy Dennis
        </FooterStyled>
      </PageWrapper>
    )
  }
}

export default Layout
