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
                        + Бесплатная доставка <OfferAdvertisingCenterSpan>Специальная цена</OfferAdvertisingCenterSpan>
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

    @media (min-width: 320px) and (max-width: 374px) {
        min-height: 1010px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        min-height: 1050px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        min-height: 1080px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        min-height: 470px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        min-height: 800px;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        min-height: 830px;
    }

`

const OfferHeadingBlock = styled.div`
    max-width: 976px;
    width: 100%;
    max-height: 115px;
    margin: 110px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 315px;
        margin: 50px 0 0 0;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 370px;
        margin: 55px 0 0 0;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        max-width: 420px;
        margin: 60px 0 0 0;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        max-width: 492px;
        margin: 45px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        max-width: 720px;
        margin: 70px 0 0 0;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        max-width: 864px;
        margin: 70px 0 0 0;
    }
`

const OfferHeadingWhite = styled.h2`
    font-size: 48px;
    font-weight: 700;
    line-height: 56.88px;
    margin: 0;

    @media (min-width: 320px) and (max-width: 374px) {
        font-size: 19px;
        line-height: 26px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        font-size: 22px;
        line-height: 30px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        font-size: 25px;
        line-height: 32px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 29px;
        line-height: 38px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 43px;
    }
    
`

const OfferHeadingYellow = styled.p`
    font-size: 48px;
    font-weight: 700;
    line-height: 56.88px;
    margin: 0;
    color: #FCB500;

    @media (min-width: 320px) and (max-width: 374px) {
        font-size: 19px;
        line-height: 26px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        font-size: 22px;
        line-height: 30px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        font-size: 25px;
        line-height: 32px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 29px;
        line-height: 38px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 43px;
    }
    
`

const OfferPriceBlock = styled.div`
    max-width: 266px;
    width: 100%;
    height: 40px;
    margin: 85px 0 0 0;
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 374px) {
        height: 30px;
        margin: 30px 0 0 0;
        max-width: 145px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        height: 30px;
        margin: 30px 0 0 0;
        max-width: 145px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        height: 30px;
        margin: 30px 0 0 0;
        max-width: 145px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        margin: 25px 0 0 0;
        max-width: 166px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        margin: 55px 0 0 0;
    }

    @media (min-width: 912px) and (max-width: 1023px) {    
        margin: 60px 0 0 0;
    }
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

    @media (min-width: 320px) and (max-width: 374px) {
        width: 56px;
        font-size: 22px;
        line-height: 32px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        width: 56px;
        font-size: 22px;
        line-height: 32px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        width: 56px;
        font-size: 22px;
        line-height: 32px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        width: 66px;
        font-size: 22px;
    }
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

    @media (min-width: 320px) and (max-width: 374px) {
        width: 70px;
        font-size: 28px;
        line-height: 32px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        width: 70px;
        font-size: 28px;
        line-height: 32px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        width: 70px;
        font-size: 28px;
        line-height: 32px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        width: 80px;
        font-size: 29px;
    }
`

const OfferAdvertisingBlock = styled.div`
    max-width: 1087px;
    width: 100%;
    min-height: 285px;
    margin: 59px 0 0 0;
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 374px) {
        margin: 30px 0 0 0;
        max-width: 315px;
        flex-direction: column;
        align-items: center;  
    }

    @media (min-width: 375px) and (max-width: 424px) {
        margin: 30px 0 0 0;
        max-width: 370px;
        flex-direction: column;
        align-items: center;  
    }

    @media (min-width: 425px) and (max-width: 539px) {
        margin: 30px 0 0 0;
        max-width: 420px;
        flex-direction: column;
        align-items: center;  
    }

    @media (min-width: 540px) and (max-width: 767px) {
        margin: 10px 0 0 0;
        max-width: 492px;
        min-height: 140px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        max-width: 720px;
        min-height: 265px;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        max-width: 864px;
        min-height: 270px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        max-width: 976px;
    }
`

const OfferAdvertisingSideBlock = styled.div`
    max-width: 193px;
    width: 100%;
    min-height: 285px;
    margin:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 193px;
        min-height: 225px; 
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 193px;
        min-height: 225px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        max-width: 193px;
        min-height: 225px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        max-width: 100px;
        min-height: 140px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        max-width: 165px;
        min-height: 265px;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        max-width: 180px;
        min-height: 270px;
    }
`

const OfferAdvertisingSideImg = styled.img`
    max-width: 192px;
    width: 100%;
    height: 165px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (min-width: 540px) and (max-width: 767px) {
        height: 100px;
    }
`

const OfferAdvertisingSideCaption = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 21.33px;
    text-align: center;
    margin: 0;

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 14px;
        line-height: 16px;
    }
`

const OfferAdvertisingCenterBlock = styled.div`
    max-width: 480px;
    width: 100%;
    min-height: 285px;
    margin:0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 315px;
        min-height: 190px;
        margin: 20px 0; 
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 370px;
        min-height: 225px;
        margin: 20px 0;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        max-width: 420px;
        min-height: 245px;
        margin: 20px 0;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        max-width: 200px;
        min-height: 140px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        max-width: 355px;
        min-height: 265px;
    }
    @media (min-width: 912px) and (max-width: 1023px) {
        max-width: 380px;
        min-height: 270px;
    }
`

const OfferAdvertisingCenterImg = styled.img`
    max-width: 480px;
    width: 100%;
    height: 160px;
    object-fit: contain;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (min-width: 320px) and (max-width: 374px) {
        height: 120px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        height: 140px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        height: 100px;
    }
`

const OfferAdvertisingCenterCaption = styled.p`
    font-size: 36px;
    font-weight: 400;
    line-height: 42.66px;
    text-align: center;
    margin: 0;

    @media (min-width: 320px) and (max-width: 374px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        font-size: 28px;
        line-height: 30px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        font-size: 30px;
        line-height: 32px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 30px;
        line-height: 32px;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        font-size: 30px;
        line-height: 32px;
    }
`

const OfferAdvertisingCenterSpan = styled.span`
    color: #FCB500;
    font-size: 24px;
    line-height: 28.44px;

    @media (min-width: 320px) and (max-width: 374px) {
        font-size: 22px;
        line-height: 22px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        font-size: 22px;
        line-height: 22px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 22px;
        line-height: 24.44px;
    }

    
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

    @media (min-width: 320px) and (max-width: 374px) {
        width: 216px;
        height: 45px;
        margin: 34px 0 0 0;
        font-size: 16px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        width: 216px;
        height: 45px;
        margin: 34px 0 0 0;
        font-size: 16px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        width: 216px;
        height: 45px;
        margin: 34px 0 0 0;
        font-size: 16px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        width: 216px;
        height: 45px;
        margin: 34px 0 0 0;
        font-size: 16px;
    }
`
