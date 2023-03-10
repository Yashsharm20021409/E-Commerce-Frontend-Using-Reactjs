import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import  { sliderItems } from "../data";

import {mobile} from '../Responsive'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  /* background-color: coral; */

  /* to make arrow center */
  position: relative;

  /* hide overflow */
  overflow: hidden;

  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.5;

  /* to make symbol horizontally and vertically and center of div */
  display: flex;
  align-items: center;
  justify-content: center;

  /* to make arrow center of body */
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  /* setting this using props and javascript do this because we have to arrow components below */
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};

  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;

  /* for slider */
  transform: translateX(${props=> props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  /* border-radius: 10px; */
  border: none;

  &:hover{
    /* background-color: ; */
    color: teal;
    /* background-color: transparent; */
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction === 'left'){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>

            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>
                {item.desc}
              </Description>
              <Button>SHOP NOW</Button>
            </InfoContainer>

          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
