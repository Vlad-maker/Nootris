import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg';
import basket from '../images/basket.svg';

function clicked() {
    console.log('clicked')
}

function Header() {
  return (
    <HeaderBackground>
    <HeaderBlock>
        <HeaderLogo src={logo}/>
        
        <HeaderNav>
            <HeaderNavLink>FAQ</HeaderNavLink>
            <HeaderNavLink>Оплата и доставка</HeaderNavLink>
            <HeaderNavLink>Возврат</HeaderNavLink>
            <HeaderNavLink>Исследования</HeaderNavLink>
            <HeaderNavLink>Личный кабинет</HeaderNavLink>
            <HeaderNavLink>8 8 (800) 600-09-90</HeaderNavLink>
        </HeaderNav>

        <BasketBtn type='button' onClick={clicked}>
            <BasketIcon src={basket}/>
        </BasketBtn>
    </HeaderBlock>
    </HeaderBackground>
  )
}

export default Header;

const HeaderBackground = styled.section`
    max-width: 2560px;
    width: 100%;
    background-color: #111111;
    display: flex;
    justify-content: center;
`

const HeaderBlock = styled.div`
    padding: 0;
    max-width: 1440px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    box-sizing: border-box;
    background-color: #111111;

    @media (max-width: 375px) {
    }

    @media (min-width: 376px) and (max-width: 428px) {
    }

    @media (min-width: 429px) and (max-width: 800px) {
    }

    @media (min-width: 801px) and (max-width: 1366px) {

    }
`

const HeaderLogo = styled.img`
    width: 120px;
    height: 34.53px;
    margin-left: 64px;
`

const HeaderNav = styled.nav`
    max-width: 956px;
    width: 100%;
    height: 32px;
    margin-left: 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderNavLink = styled.div`
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        color: #cbcbcb;
        transition: 0.2s;
    }
`

const BasketBtn = styled.button`
    width: 40px;
    height: 37px;
    border:none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 80px;
    padding: 0;
`

const BasketIcon = styled.img`
    width: 100%;
    height: 100%
`

