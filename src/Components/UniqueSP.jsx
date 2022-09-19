import React from 'react';
import styled from 'styled-components';
import './UniqueSP.css'
import ginger from '../images/ginger.svg';
import nootris from '../images/nootris.svg';
import lemon from '../images/lemon.svg';


function UniqueSP() {
  return (
    <UniqueSPBackground>
        <UniqueSPBlock className='unique-background'>

            <TextBlock>
                <HeadingCaption>
                    АКТИВИРУЙ ИММУНИТЕТ!
                </HeadingCaption>
                <AdvertisingCaption>
                    Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма
                </AdvertisingCaption>
                <AdviceCaptionHeading>
                    NOOTRIS ПОМОГАЕТ
                </AdviceCaptionHeading>
                <AdviceCaption>
                    Вашему организму во время пандемии и сезонных простуд
                </AdviceCaption>
            </TextBlock>

            <ImageBlock>
                <GingerImg src={ginger}/>
                <NootrisImg src={nootris}/>
                <LemonImg src={lemon}/>
            </ImageBlock>

        </UniqueSPBlock>
    </UniqueSPBackground>
  )
}

export default UniqueSP;

const UniqueSPBackground = styled.section`
    max-width: 2560px;
    width: 100%;
    background-color: #fcda28;
    display: flex;
    justify-content: center;
`

const UniqueSPBlock = styled.div`
    max-width: 1440px;
    width: 100%;
    max-height: 792px;
    display: flex;

    @media (min-width: 320px) and (max-width: 539px) {
        flex-direction: column;
        max-height: 1080px;
    }

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 374px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 424px;
        min-height: 755px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        max-width: 539px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        max-width: 767px;
        height: 323px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        max-width: 1023px;
        max-height: 495px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        max-width: 1199px;
        max-height: 635px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        max-width: 1300px;
        max-height: 720px;
    }

    @media (min-width: 1301px) and (max-width: 1410px) {
        max-width: 1410px;
        max-height: 722px;
    }
`

const TextBlock = styled.div`
    max-width: 1008px;
    width: 100%;
    max-height: 620px;
    margin: 106px 0 0 64px;
    z-index: 10;

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 320px;
        margin: 20px auto 0;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 370px;
        margin: 20px auto 0;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        max-width: 420px;
        margin: 20px auto 0;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        margin: 40px 0 0 24px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        margin: 65px 0 0 24px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        margin: 80px 0 0 24px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: 86px 0 0 24px;
    }

    @media (min-width: 1301px) and (max-width: 1410px) {
        margin: 90px 0 0 64px;
    }
`

const HeadingCaption = styled.h2`
    font-size: 144px;
    line-height: 152px;
    font-weight: 700;
    margin: 0;

    @media (min-width: 320px) and (max-width: 374px) {
        text-align: center;
        font-size: 42px;
        line-height: 45px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        text-align: center;
        font-size: 50px;
        line-height: 55px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        text-align: center;
        font-size: 54px;
        line-height: 60px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 56px;
        line-height: 52px;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 80px;
        line-height: 92px;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        font-size: 94px;
        line-height: 94px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        font-size: 104px;
        line-height: 122px;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
        font-size: 128px;
        line-height: 142px;
    }
    @media (min-width: 1301px) and (max-width: 1410px) {
        font-size: 133px;
        line-height: 142px;
    }
`

const AdvertisingCaption = styled.p`
    font-size: 24px;
    line-height: 28.44px;
    font-weight: 400;
    margin: 24px 0 0 0;
    color: #000;
    max-width: 652px;

    @media (min-width: 320px) and (max-width: 424px) {
        text-align: center;
        font-size: 16px;
        line-height: 18px;
        margin: 16px 0 0 0;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        text-align: center;
        font-size: 17px;
        line-height: 20px;
        margin: 16px 0 0 0;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 12px;
        line-height: 16px;
        max-width: 320px;
        margin: 12px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 18px;
        line-height: 20px;
        max-width: 480px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 26px;
        max-width: 540px;
    }
`

const AdviceCaptionHeading = styled.h3`
    font-size: 36px;
    line-height: 42.66px;
    font-weight: 700;
    margin: 120px 0 0 0;
    color: #000;
    max-width: 416px;

    @media (min-width: 320px) and (max-width: 374px) {
        text-align: center;
        font-size: 29px;
        line-height: 32px;
        margin: 30px 0 0 0;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        text-align: center;
        font-size: 33px;
        line-height: 35px;
        margin: 34px 0 0 0;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        text-align: center;
        font-size: 34px;
        line-height: 36px;
        margin: 34px 0 0 0;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 20px;
        line-height: 22px;
        margin: 35px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 911px) {
        font-size: 30px;
        line-height: 34px;
        margin: 50px 0 0 0;
    }

    @media (min-width: 912px) and (max-width: 1023px) {
        font-size: 30px;
        line-height: 34px;
        margin: 45px 0 0 0;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        margin: 80px 0 0 0;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        margin: 90px 0 0 0;
    }
    @media (min-width: 1301px) and (max-width: 1410px) {
        margin: 90px 0 0 0;
    }
`

const AdviceCaption = styled.p`
    font-size: 18px;
    line-height: 21.33px;
    font-weight: 400;
    margin: 16px 0 0 0;
    color: #000;
    max-width: 350px;

    @media (min-width: 320px) and (max-width: 424px) {
        text-align: center;
        font-size: 16px;
        line-height: 18px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
        margin-top: 10px;
    }

    @media (min-width: 320px) and (max-width: 374px) {
        max-width: 320px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        max-width: 370px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        text-align: center;
        font-size: 18px;
        line-height: 20px;
        max-width: 420px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        font-size: 12px;
        line-height: 16px;
        max-width: 235px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 16px;
        line-height: 18px;
        max-width: 310px;
    }
`

const ImageBlock = styled.div`
    max-width: 390px;
    width: 100%;
    min-height: 792px;
    position: relative; 

    @media (min-width: 320px) and (max-width: 374px) {
        margin: 40px auto 0;
        max-width: 320px;
        min-height: 380px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        margin: 40px auto 0;
        max-width: 370px;
        min-height: 380px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        margin: 40px auto 0;
        max-width: 420px;
        min-height: 410px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        min-height: 200px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        min-height: 495px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        min-height: 635px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        min-height: 720px;
    }
`

const GingerImg = styled.img`
    width: 496px;
    height: 408.83px;
    position: absolute;
    top: 275px;
    right: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    object-fit: contain;

    @media (min-width: 320px) and (max-width: 374px) {
        right: 0px;
        top: 75px;
        width: 250px;
        height: 258.83px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        right: 0px;
        top: 75px;
        width: 270px;
        height: 288.83px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        right: 0px;
        top: 75px;
        width: 290px;
        height: 298.83px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        right: 0px;
        top: 115px;
        width: 190px;
        height: 158.83px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        right: 0px;
        top: 190px;
        width: 300px;
        height: 238.83px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        right: 2px;
        top: 210px;
        width: 422px;
        height: 338.83px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        right: 6px;
        top: 245px;
        width: 442px;
        height: 358.83px;
    }

    @media (min-width: 1301px) and (max-width: 1410px) {
        right: 26px;
        top: 255px;
        width: 482px;
        height: 358.83px;
    }
`

const NootrisImg = styled.img`
    width: 224px;
    height: 635.29px;
    position: absolute;
    top: 60px;
    right: 148px;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    object-fit: contain;

    @media (min-width: 320px) and (max-width: 374px) {
        right: 57px;
        top: 0px;
        width: 200px;
        height: 345.29px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        right: 85px;
        top: 0px;
        width: 200px;
        height: 375.29px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        right: 110px;
        top: 0px;
        width: 200px;
        height: 375.29px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        right: 30px;
        top: 45px;
        width: 100px;
        height: 220.29px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        right: 60px;
        width: 140px;
        height: 380.29px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        right: 76px;
        width: 170px;
        height: 500.29px;
    }
    @media (min-width: 1200px) and (max-width: 1300px) {
        right: 94px;
        width: 200px;
        height: 580.29px;
    }
    @media (min-width: 1301px) and (max-width: 1410px) {
        right: 134px;
        width: 200px;
        height: 580.29px;
    }
`

const LemonImg = styled.img`
    width: 533px;
    height: 462.94px;
    position: absolute;
    top: 440px;
    right: 230px;
    z-index: 2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    object-fit: contain;

    @media (min-width: 320px) and (max-width: 374px) {
        right: 70px;
        top: 200px;
        width: 249px;
        height: 242.94px;
    }

    @media (min-width: 375px) and (max-width: 424px) {
        right: 90px;
        top: 200px;
        width: 279px;
        height: 272.94px;
    }

    @media (min-width: 425px) and (max-width: 539px) {
        right: 130px;
        top: 200px;
        width: 289px;
        height: 282.94px;
    }

    @media (min-width: 540px) and (max-width: 767px) {
        right: 46px;
        top: 167px;
        width: 279px;
        height: 202.94px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        right: 78px;
        top: 290px;
        width: 379px;
        height: 262.94px;
    }

    @media (min-width: 1024px) and (max-width: 1199px) {
        right: 108px;
        top: 358px;
        width: 479px;
        height: 362.94px;
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        right: 156px;
        top: 405px;
        width: 509px;
        height: 412.94px;
    }
    @media (min-width: 1301px) and (max-width: 1410px) {
        right: 192px;
        top: 405px;
        width: 509px;
        height: 412.94px;
    }
`