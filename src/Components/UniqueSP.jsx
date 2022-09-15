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

export default UniqueSP

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
    min-height: 792px;
    display: flex;
`

const TextBlock = styled.div`
    max-width: 1008px;
    width: 100%;
    min-height: 600px;
    margin: 106px 0 0 64px;
    z-index: 10;
`

const HeadingCaption = styled.h2`
    font-size: 144px;
    line-height: 152px;
    font-weight: 700;
    margin: 0;
`

const AdvertisingCaption = styled.p`
    font-size: 24px;
    line-height: 28.44px;
    font-weight: 400;
    margin: 24px 0 0 0;
    color: #000;
    max-width: 652px;
`

const AdviceCaptionHeading = styled.h3`
    font-size: 36px;
    line-height: 42.66px;
    font-weight: 700;
    margin: 120px 0 0 0;
    color: #000;
    max-width: 416px;
`

const AdviceCaption = styled.p`
    font-size: 18px;
    line-height: 21.33px;
    font-weight: 400;
    margin: 16px 0 0 0;
    color: #000;
    max-width: 350px;
`

const ImageBlock = styled.div`
    max-width: 390px;
    width: 100%;
    min-height: 792px;
    position: relative;
`

const GingerImg = styled.img`
    width: 496px;
    height: 408.83px;
    position: absolute;
    top: 275px;
    left: -170px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const NootrisImg = styled.img`
    width: 224px;
    height: 635.29px;
    position: absolute;
    top: 60px;
    left: 18px;
    z-index: 1;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const LemonImg = styled.img`
    width: 533px;
    height: 462.94px;
    
    position: absolute;
    top: 440px;
    right: 230px;
    z-index: 2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
