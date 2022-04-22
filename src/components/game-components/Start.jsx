import styled from "styled-components";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useRef } from "preact/hooks";

import { useGlobalContext } from "../../GlobalContext";
import Training from "./training/Training";
import PlayEnd from "./training/PlayEnd";

const Start = () => {
  const gameStatus = useGlobalContext().gameStatus;
  const gameLevel = useGlobalContext().level;

  const trainingBtnLayerRef = useRef();
  const playBtnLayerRef = useRef();
  const trainingControls = useAnimation();
  const playControls = useAnimation();
  const playNormalControls = useAnimation();
  const playHardControls = useAnimation();

  const animTrainingBtnLayer = {
    opacity: [0.5, 1, 0.5, 0],
    scale: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const animPlayBtnLayer = {
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

  const trainingClick = () => {
    trainingControls.start(animTrainingBtnLayer);
    gameStatus.setValue("training");
  };
  const playClick = () => {
    playControls.start(animPlayBtnLayer);
    gameStatus.setValue("game-level");
  };

  const playNormal = () => {
    playNormalControls.start(animPlayBtnLayer);
    gameStatus.setValue("play-normal");
    gameLevel.setValue("normal");
  };

  const playHard = () => {
    playHardControls.start(animPlayBtnLayer);
    gameStatus.setValue("play-hard");
    gameLevel.setValue("hard");
  };

  return (
    <Wrapper>
      <>
        <LeftAppleIcon
          variants={animContent}
          initial="from"
          animate="to"
          width="500 "
          height="500"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_13_21)">
            <path
              d="M358.281 120.099C331.261 126.249 306.43 139.448 288.598 156.11C290.011 134.228 300.177 101.555 345.54 91.2298L341.112 71.7743C290.614 83.2681 272.293 115.313 268.175 144.742C266.168 125.016 262.434 101.781 255.554 92.7787C242.701 75.9458 218.161 72.6457 200.745 85.3994C183.359 98.1461 179.674 122.124 192.545 138.961C198.387 146.605 214.975 155.032 231.344 161.963C210.406 158.188 188.923 158.666 168.174 163.369C106.425 177.424 50.7665 229.112 73.6865 329.81C96.9724 432.116 250.567 551.409 303.022 539.469C326.828 534.051 332.011 517.223 345.822 514.08C359.869 510.882 367.775 524.707 398.238 517.773C450.731 505.825 538.905 332.024 515.511 229.246C492.593 128.556 420.037 106.042 358.281 120.099ZM393.029 494.922C381.122 497.632 375.714 495.906 368.863 493.724C361.977 491.526 352.527 488.517 340.621 491.227C328.714 493.937 321.046 500.834 314.871 506.374C309.38 511.325 305.393 514.893 297.821 516.616C285.427 519.437 243.439 503.299 192.693 459.701C141.78 415.972 105.84 365.47 96.5395 324.609C87.4731 284.776 91.494 252.068 108.479 227.386C122.37 207.206 145.426 192.584 173.383 186.22C204.479 179.143 237.889 183.188 258.496 196.525L278.679 209.583L291.222 189.077C304.026 168.135 332.387 150.029 363.475 142.954C387.645 137.452 468.384 127.8 492.658 234.448C501.981 275.408 491.24 336.567 463.914 398.048C436.68 459.331 405.522 492.078 393.029 494.922Z"
              fill="#8F8F8F"
              fill-opacity="0.1"
            />
          </g>
        </LeftAppleIcon>
        <RightAppleIcon
          variants={animContent}
          initial="from"
          animate="to"
          width="400"
          height="400"
          viewBox="0 0 599 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_13_21)">
            <path
              d="M358.281 120.099C331.261 126.249 306.43 139.448 288.598 156.11C290.011 134.228 300.177 101.555 345.54 91.2298L341.112 71.7743C290.614 83.2681 272.293 115.313 268.175 144.742C266.168 125.016 262.434 101.781 255.554 92.7787C242.701 75.9458 218.161 72.6457 200.745 85.3994C183.359 98.1461 179.674 122.124 192.545 138.961C198.387 146.605 214.975 155.032 231.344 161.963C210.406 158.188 188.923 158.666 168.174 163.369C106.425 177.424 50.7665 229.112 73.6865 329.81C96.9724 432.116 250.567 551.409 303.022 539.469C326.828 534.051 332.011 517.223 345.822 514.08C359.869 510.882 367.775 524.707 398.238 517.773C450.731 505.825 538.905 332.024 515.511 229.246C492.593 128.556 420.037 106.042 358.281 120.099ZM393.029 494.922C381.122 497.632 375.714 495.906 368.863 493.724C361.977 491.526 352.527 488.517 340.621 491.227C328.714 493.937 321.046 500.834 314.871 506.374C309.38 511.325 305.393 514.893 297.821 516.616C285.427 519.437 243.439 503.299 192.693 459.701C141.78 415.972 105.84 365.47 96.5395 324.609C87.4731 284.776 91.494 252.068 108.479 227.386C122.37 207.206 145.426 192.584 173.383 186.22C204.479 179.143 237.889 183.188 258.496 196.525L278.679 209.583L291.222 189.077C304.026 168.135 332.387 150.029 363.475 142.954C387.645 137.452 468.384 127.8 492.658 234.448C501.981 275.408 491.24 336.567 463.914 398.048C436.68 459.331 405.522 492.078 393.029 494.922Z"
              fill="#8F8F8F"
              fill-opacity="0.1"
            />
          </g>
        </RightAppleIcon>
      </>
      <ContentBox>
        <AnimatePresence exitBeforeEnter>
          {gameStatus.value === "start" && (
            <StartBox
              key="start-page"
              variants={animContent}
              initial="from"
              animate="to"
              exit="exit"
            >
              <Heading>Speed Sorting</Heading>
              <Text>Make your reaction lightning fast </Text>
              <Buttons>
                <Btn title="start training" onClick={trainingClick}>
                  <BtnLayer
                    ref={trainingBtnLayerRef}
                    animate={trainingControls}
                  ></BtnLayer>
                  Training
                </Btn>
                <Btn title="start playing" onClick={playClick}>
                  <BtnLayer
                    ref={playBtnLayerRef}
                    animate={playControls}
                  ></BtnLayer>
                  Play
                </Btn>
              </Buttons>
            </StartBox>
          )}
          {gameStatus.value === "game-level" && (
            <LevelBox
              key="level-page"
              variants={animContent}
              initial="from"
              animate="to"
              exit="exit"
            >
              <LevelHeading>Choose the level of difficulty</LevelHeading>
              <Buttons>
                <Btn title="normal level" onClick={playNormal}>
                  <BtnLayer animate={playNormalControls}></BtnLayer>
                  Normal
                </Btn>
                <Btn title="hard level" onClick={playHard}>
                  <BtnLayer animate={playHardControls}></BtnLayer>
                  Hard
                </Btn>
              </Buttons>
            </LevelBox>
          )}
          {[
            "training",
            "training-start",
            "training-end",
            "play-normal",
            "play-hard",
            "play-normal-start",
            "play-hard-start",
          ].includes(gameStatus.value) && <Training key="training-page" />}
          {gameStatus.value === "play-end" && <PlayEnd />}
        </AnimatePresence>
      </ContentBox>
    </Wrapper>
  );
};

export default Start;

const Wrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const LeftAppleIcon = styled(motion.svg)`
  position: absolute;
  top: -2rem;
  left: -2rem;
`;

const RightAppleIcon = styled(motion.svg)`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  transform: rotateZ(25deg);
`;

const ContentBox = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const StartBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const LevelBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Heading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const LevelHeading = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 4rem;
`;

const Text = styled(motion.p)`
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const Buttons = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Btn = styled(motion.button)`
  position: relative;
  width: 8rem;
  padding: 0.7rem 0;
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
