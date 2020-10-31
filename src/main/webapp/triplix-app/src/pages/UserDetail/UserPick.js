import React, { useState } from "react";
import styled from "styled-components";

const MarginContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainBox = styled.button`
  width: 460px;
  height: 236px;
  border-radius: 8px;
  margin-bottom: 17px;
  overflow: hidden;
  break-inside: avoid;
  position: relative;
  display: flex;

  &:hover {
    border: 4px solid #50bcdf;
  }
  cursor: pointer;
`;

const MainLabel = styled.h2`
  position: absolute;
  height: 38px;
  left: 9%;
  right: 50%;
  top: calc(50% - 38px / 2 - 38px);
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 38px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.52px;

  color: #ffffff;
`;

const Label = styled.p`
  position: absolute;
  height: 48px;
  left: 9%;
  text-align: left;
  top: calc(50% - 48px / 2 + 11px);
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.32px;
  color: #dbdbdb;
`;

const ImageBox = styled.div`
  position: absolute;
  left: 55.75%;
  right: 6.75%;
  top: 18.22%;
  bottom: 18.22%;
`;
const InterestingBox = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 39.75%;
  bottom: 59.32%;
`;

const UserPick = (props) => {
  return (
    <MarginContainer>
      <Main>
        <MainBox
          style={{
            background:
              "linear-gradient(332deg, #E659A8 -14.31%, #EE5A4A 77.81%, #ED7E21 113.18%)",
          }}
          onClick={() => props.Myclick()}
        >
          <MainLabel>내가 갔던 여행</MainLabel>
          <Label>
            내가 등록한 글
            <br />
            전체 불러오기
          </Label>
          <ImageBox>
            <img src={"/images/Oval1.png"} alt="NewPick" />
          </ImageBox>
        </MainBox>

        <MainBox
          style={{
            background:
              "linear-gradient(150.6deg, #851095 -11.03%, #821297 -11.03%, #A75DEA 42.9%, #6159DE 86.99%)",
          }}
          onClick={() => props.Pickclick()}
          /* onClick={() => {
                        user && user.uid && history.push('/Follow');
                    }}*/
        >
          <MainLabel>팔로워 PICK</MainLabel>
          <Label>
            나의 팔로워들만의 숨겨진
            <br />
            장소는 ?!
          </Label>
          <ImageBox>
            <img src={"/images/Oval2.png"} alt="Follower" />
          </ImageBox>
        </MainBox>

        <MainBox
          style={{
            background:
              "linear-gradient(151.01deg, #61BFDA -17.86%, #4366E9 105.09%)",
          }}
          onClick={() => props.Mapclick()}
        >
          <InterestingBox>
            <img src="/images/Interesting.png" alt="Interesting" />
          </InterestingBox>
          <MainLabel>나만의 PICK</MainLabel>
          <Label>
            내가 갔던 장소는 <br />
            어디일까?
          </Label>
          <ImageBox>
            <img src={"/images/Oval3.png"} alt="Interest" />
          </ImageBox>
        </MainBox>
      </Main>
    </MarginContainer>
  );
};

export default UserPick;
