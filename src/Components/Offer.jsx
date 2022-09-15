import React from 'react';
import styled from 'styled-components';

function offer() {
    console.log('Offered!')
  }
  

function Offer() {
  return (
    <OfferBackground>
        <OfferBlock>
            
            <OfferHeadingBlock>
                <OfferHeadingWhite>
                    ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                </OfferHeadingWhite>
                <OfferHeadingYellow>
                    СО СКИДКОЙ -15% ПЕРВЫМ!
                </OfferHeadingYellow>
            </OfferHeadingBlock>

            <OfferPriceBlock>

            </OfferPriceBlock>

            <OfferAdvertisingBlock>

            </OfferAdvertisingBlock>

            <OfferBtn onClick={offer}>Оформить заказ!</OfferBtn>

        </OfferBlock>
    </OfferBackground>
  )
}

export default Offer

const OfferBackground = styled.section`
    max-width: 2560px;
    width: 100%;
    background-color: #111;
    display: flex;
    justify-content: center;
`

const OfferBlock = styled.div`
    max-width: 1440px;
    width: 100%;
    min-height: 926px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const OfferHeadingBlock = styled.div`
    max-width: 1312px;
    width: 100%;
    height: 115px;
    margin: 110px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const OfferHeadingWhite = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 56.88px;
    margin: 0;
`

const OfferHeadingYellow = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 56.88px;
    margin: 0;
    color: #FCB500;
`

const OfferPriceBlock = styled.div`
    max-width: 272px;
    width: 100%;
    height: 40px;
    margin: 85px 0 0 0;
`

const OfferAdvertisingBlock = styled.div`
    max-width: 1087px;
    width: 100%;
    min-height: 285px;
    margin: 59px 0 0 0;
`

const OfferBtn = styled.button`
    width: 256px;
    height: 56px;
    border: none;
    background-color: #FCB500;
    border-radius: 7px;
    color: #000;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.33px;
    margin: 64px 0 0 0;
    cursor: pointer;
    transition: 0.2s;

    :hover {
        background-color: #EDAA00;
        transition: 0.2s;
        transform: scale(1.01)
    }
`
