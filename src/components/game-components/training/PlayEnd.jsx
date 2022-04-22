import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "preact/hooks";

import { useGlobalContext } from "../../../GlobalContext";

const PlayEnd = () => {
  const gameStatus = useGlobalContext().gameStatus;
  const gameScores = useGlobalContext().scores;
  const gameLevel = useGlobalContext().level;

  const btnLayerRef = useRef();
  const btnLayerAgainControl = useAnimation();
  const btnLayerHomeControls = useAnimation();

  const animBtnLayer = {
    opacity: [0.5, 1, 0.5, 0],
    scale: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const animContent = {
    from: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
    to: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const playAgainClick = () => {
    btnLayerAgainControl.start(animBtnLayer);
    gameStatus.setValue("game-level");
  };
  const homeClick = () => {
    btnLayerHomeControls.start(animBtnLayer);
    gameStatus.setValue("start");
  };

  return (
    <Wrapper variants={animContent} animate="to" initial="from" exit="exit">
      <Heading>Results</Heading>
      <InfoBox>
        <Level>
          <h4>level:</h4> <span>{gameLevel.value}</span>
        </Level>
        <Level>
          <h4>points:</h4> <span>{gameScores.value}</span>
        </Level>
      </InfoBox>
      <Btns>
        <Btn onClick={playAgainClick}>
          <BtnLayer ref={btnLayerRef} animate={btnLayerAgainControl} />
          Play Again
        </Btn>
        <Btn onClick={homeClick}>
          <BtnLayer ref={btnLayerRef} animate={btnLayerHomeControls} />
          Home
        </Btn>
      </Btns>
    </Wrapper>
  );
};

export default PlayEnd;

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 4rem;
  overflow: hidden;
  z-index: 4;
`;

const Heading = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 500;
`;

const InfoBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  background: #dfdfdf;
  padding: 2rem 5rem;
  border-radius: 1rem;
`;

const Level = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h4 {
    font-weight: 400;
  }

  & span {
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--accent-color-bg);
    padding-left: 0.5rem;
  }
`;

const Btns = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Btn = styled(motion.button)`
  position: relative;
  width: 8.5rem;
  padding: 0.7rem 1.5rem;
  border: none;
  font-size: 1rem;
  border-radius: 1rem;
  background: var(--accent-color);
  color: #fff;
  overflow: hidden;
  filter: drop-shadow(0px 4px 2px hsl(0 0% 0% / 0.4));
  transition: background 0.3s ease, filter 0.3s ease;

  &:hover {
    background: var(--accent-color-light);
  }

  &:active {
    filter: drop-shadow(0px 1px 2px hsl(0 0% 0% / 0.4));
    transition: filter 0.2s ease;
  }
`;

const BtnLayer = styled(motion.span)`
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: hsl(0 100% 100% / 0.6);
  filter: blur(5px);
  border-radius: 1rem;
  pointer-events: none;
  transform: scale(0);
  opacity: 0;
`;
