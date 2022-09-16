import React from 'react';
import styled from 'styled-components';
import ginger from '../images/ginger.svg';
import virus from '../images/virus.svg';
import nootris from '../images/nootris270.svg';

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
                <OfferPriceOld>
                    750&#8381;
                </OfferPriceOld>
                <OfferPriceNew>
                    690&#8381;
                </OfferPriceNew>
            </OfferPriceBlock>

            <OfferAdvertisingBlock>

                <OfferAdvertisingSideBlock>
                    <OfferAdvertisingSideImg src={ginger}/>
                    <OfferAdvertisingSideCaption>
                        Содержит<><br/></><span style={{color: '#FCB500'}}>имбирь</span>
                    </OfferAdvertisingSideCaption>
                </OfferAdvertisingSideBlock>

                <OfferAdvertisingCenterBlock>
                    <OfferAdvertisingCenterImg src={nootris}/>
                    <OfferAdvertisingCenterCaption>
                        + Бесплатная доставка <span style={{color: '#FCB500', fontSize: '24px', lineHeight: '28.44px'}}>Специальная цена</span>
                    </OfferAdvertisingCenterCaption>
                </OfferAdvertisingCenterBlock>

                <OfferAdvertisingSideBlock>
                    <OfferAdvertisingSideImg src={virus}/>
                    <OfferAdvertisingSideCaption>
                    Нейтрализует<><br/></><span style={{color: '#FCB500'}}>вирусы</span>
                    </OfferAdvertisingSideCaption>
                </OfferAdvertisingSideBlock>

            </OfferAdvertisingBlock>

            <OfferBtn onClick={offer}>Оформить заказ!</OfferBtn>

        </OfferBlock>
    </OfferBackground>
  )
}

export default Offer;

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

const OfferHeadingYellow = styled.p`
    font-size: 48px;
    font-weight: 700;
    line-height: 56.88px;
    margin: 0;
    color: #FCB500;
`

const OfferPriceBlock = styled.div`
    max-width: 266px;
    width: 100%;
    height: 40px;
    margin: 85px 0 0 0;
    display: flex;
    justify-content: space-between;
`

const OfferPriceOld = styled.p`
    width: 112px;
    font-size: 36px;
    font-weight: 400;
    line-height: 42.66px;
    text-decoration: line-through;
    color: #ADADAD;
    margin: 0;
    text-align: center;
`

const OfferPriceNew = styled.p`
    width: 128px;
    font-size: 48px;
    font-weight: 400;
    line-height: 56.88px;
    color: #fff;
    margin: 0;
    display: flex;
    align-self:center;
    justify-self: center;

`

const OfferAdvertisingBlock = styled.div`
    max-width: 1087px;
    width: 100%;
    min-height: 285px;
    margin: 59px 0 0 0;
    display: flex;
    justify-content: space-between;
`

const OfferAdvertisingSideBlock = styled.div`
    max-width: 193px;
    width: 100%;
    min-height: 285px;
    margin:0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const OfferAdvertisingSideImg = styled.img`
    width: 192px;
    height: 165px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const OfferAdvertisingSideCaption = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 21.33px;
    text-align: center;
    margin: 0;
`

const OfferAdvertisingCenterBlock = styled.div`
    max-width: 480px;
    width: 100%;
    min-height: 285px;
    margin:0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const OfferAdvertisingCenterImg = styled.img`
    max-width: 480px;
    width: 100%;
    height: 160px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const OfferAdvertisingCenterCaption = styled.p`
    font-size: 36px;
    font-weight: 400;
    line-height: 42.66px;
    text-align: center;
    margin: 0;
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
