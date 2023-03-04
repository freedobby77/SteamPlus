import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const CurrentGame = ({ game }: any) => {
  const navigate = useNavigate();

  const Video = game?.gamevideo === null ? game?.gameMainImg : game?.gamevideo;
  const Title = game?.gametitle;

  return (
    <CurrentGameLayout>
      {/* 게임이미지 */}
      {/* <CurrentGameImg src={game?.gameMainImg} /> */}
      <GameVideo src={Video} controls autoPlay muted loop />
      <CurrentGameBlackImg />
      <CurrentGameBox>
        {/* 게임타이틀 */}
        <CurrentGameTitle>{Title}</CurrentGameTitle>
        {/* 게임채널입장*/}
        <CurrentChannelJoinBtn
          onClick={() => {
            navigate(`/Teamchat/:${game.gameid}`, {
              state: {
                gameid: game.gameid.toString(),
              },
            });
          }}
        >
          게임채널 입장하기
        </CurrentChannelJoinBtn>
      </CurrentGameBox>
    </CurrentGameLayout>
  );
};
const GameVideo = styled.video`
  width: 100%;
  height: 700px;
  object-fit: cover;
  position: fixed;
  top: 0;
`;
const CurrentGameLayout = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 9;
`;
const CurrentGameBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 60px;
  right: 100px;
`;
const CurrentGameImg = styled.img`
  width: 100%;
  height: 700px;
  object-fit: cover;
  position: fixed;
  top: 0;
`;
const CurrentGameBlackImg = styled.div`
  position: fixed;
  width: 100%;
  height: 700px;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(25, 32, 48, 0) 0%,
    rgba(25, 32, 48, 1) 100%
  );
  /* opacity: 0.5; */
`;

const CurrentGameTitle = styled.span`
  text-align: right;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 72px;
  text-shadow: 0px 0px 15px white;
  color: #ffffff;
`;

const CurrentChannelJoinBtn = styled.span`
  width: 150px;
  height: 40px;
  line-height: 40px;
  margin-top: 25px;
  margin-left: auto;
  text-align: center;
  background: #00b8c8;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
