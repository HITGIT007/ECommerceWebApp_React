import React from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #FAFAAE;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #FBEDEA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction === "left" && "10px"};
    right: ${props=>props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    
`
const Wrapper = styled.div`
    height: 100%;
    background-color: #FAFAAE;
    display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px; 
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size; 20px;
    background-color: #F67A30;
    cursor: pointer;
`



const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>

            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://img.faballey.com/images/Product/DRS03586Z/3.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLES! GET FLAT 30% 0FF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImgContainer>
                        <Image src="https://img.faballey.com/images/Product/DRS03586Z/3.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                    <Title>FLASH SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLES! GET FLAT 30% 0FF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>

                <Slide>
                    <ImgContainer>
                        <Image src="https://img.faballey.com/images/Product/DRS03586Z/3.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                    <Title>CLEARANCE SALE</Title>
                    <Desc>DON'T COMPROMISE ON STYLES! GET FLAT 30% 0FF FOR NEW ARRIVALS</Desc>
                    <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
                

            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>

            </Arrow>

        </Container>
    )
}

export default Slider
