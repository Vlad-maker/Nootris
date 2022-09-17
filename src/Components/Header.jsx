import React from 'react'
import styled from 'styled-components';
import './BMmenu.css'
import logo from '../images/logo.svg';
import basket from '../images/basket.svg';

import { slide as Menu } from "react-burger-menu";

const toggleMenu = ({ isOpen }) => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    isOpen
      ? menuWrap.setAttribute("aria-hidden", false)
      : menuWrap.setAttribute("aria-hidden", true);
  };

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

        <BMmenuWrapper>
            <Menu right noOverlay disableOverlayClick onStateChange={toggleMenu}>
                <HeaderNavBMmenu>
                    <HeaderNavLink>FAQ</HeaderNavLink>
                    <HeaderNavLink>Оплата и доставка</HeaderNavLink>
                    <HeaderNavLink>Возврат</HeaderNavLink>
                    <HeaderNavLink>Исследования</HeaderNavLink>
                    <HeaderNavLink>Личный кабинет</HeaderNavLink>
                    <HeaderNavLink>8 8 (800) 600-09-90</HeaderNavLink>
                </HeaderNavBMmenu>
            </Menu>
        </BMmenuWrapper>

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

    @media (max-width: 1023px) {
        margin-left: 24px;
        height: 30px;
    }

    @media (min-width: 1024px) and (max-width: 1300px) {
        margin-left: 24px;
    }
`

const HeaderNav = styled.nav`
    max-width: 956px;
    width: 100%;
    height: 32px;
    margin-left: 28px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1023px) {
        display: none;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        max-width: 760px;
    }

    @media (min-width: 1200px) and (max-width: 1270px) {
        max-width: 880px;
    }
    @media (min-width: 1271px) and (max-width: 1365px) {
        max-width: 900px;
    }
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

    @media (max-width: 1023px) {
        margin: 0 0 10px 0;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        font-size: 16px;
    }
`

const BasketBtn = styled.button`
    width: 40px;
    height: 37px;
    border:none;
    background-color: transparent;
    cursor: pointer;
    margin: 0 80px 0 0;
    padding: 0;

    @media (max-width: 1023px) {
        width: 30px;
        height: 27px;
        margin: 0 65px 0 auto;
    }

    @media (min-width: 1024px) and (max-width: 1300px) {
        margin: 0 24px;
    }
`

const BasketIcon = styled.img`
    width: 100%;
    height: 100%
`

const BMmenuWrapper = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
`

const HeaderNavBMmenu = styled.nav`
    max-width: 260px;
    width: 100%;
    margin: 10px 0 0 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`