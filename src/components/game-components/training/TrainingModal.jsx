import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "preact/hooks";

import { useGlobalContext } from "../../../GlobalContext";

const TrainingModal = () => {
  const gameStatus = useGlobalContext().gameStatus;

  const btnLayerRef = useRef();
  const btnLayerAnimControl = useAnimation();
  const btnLayerAgainControl = useAnimation();
  const btnLayerHomeControls = useAnimation();

  const wrapperLayerControls = useAnimation();
  const modalBoxControls = useAnimation();

  const animBtnLayer = {
    opacity: [0.5, 1, 0.5, 0],
    scale: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  };

  const animWrapperLayer = {
    from: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    to: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  const animModalBox = {
    from: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    to: {
      y: "300%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  useEffect(() => {
    if (gameStatus.value === "training-end") {
      modalBoxControls.start("from");
      wrapperLayerControls.start("from");
    } 
  }, [gameStatus.value]);

  const closeModal = () => {
    btnLayerAnimControl.start(animBtnLayer);
    modalBoxControls.start("to");
    wrapperLayerControls.start("to");
    setTimeout(() => {
      gameStatus.setValue("training-start");
    }, 1000);
  };

  const tryAgain = () => {
    btnLayerAgainControl.start(animBtnLayer);
    modalBoxControls.start("to");
    wrapperLayerControls.start("to");
    setTimeout(() => {
      gameStatus.setValue("training-start");
    }, 1000);
  };

  const goHome = () => {
    btnLayerHomeControls.start(animBtnLayer);
    modalBoxControls.start("to");
    wrapperLayerControls.start("to");
    setTimeout(() => {
      gameStatus.setValue("start");
    }, 1000);
  };

  return (
    <Wrapper variants={animWrapperLayer} animate={wrapperLayerControls}>
      <ModalBox variants={animModalBox} animate={modalBoxControls}>
        {gameStatus.value === "training" && (
          <ModalText>
            Use arrow keys to place apples to the corresponding buskets
          </ModalText>
        )}
        {gameStatus.value === "training" ? (
          <Btn onClick={closeModal}>
            <BtnLayer ref={btnLayerRef} animate={btnLayerAnimControl} />
            OK
          </Btn>
        ) : gameStatus.value === "training-end" ? (
          <Btns>
            <Btn onClick={tryAgain}>
              <BtnLayer ref={btnLayerRef} animate={btnLayerAgainControl} />
              Try Again
            </Btn>
            <Btn onClick={goHome}>
              <BtnLayer ref={btnLayerRef} animate={btnLayerHomeControls} />
              Home
            </Btn>
          </Btns>
        ) : ""}
      </ModalBox>
    </Wrapper>
  );
};

export default TrainingModal;

const Wrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(23, 52, 50, 0.8);
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 20rem;
  height: fit-content;
  margin: auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const ModalText = styled(motion.p)`
  text-align: center;
  line-height: 1.5;
`;

const Btns = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Btn = styled(motion.button)`
  position: relative;
  width: 8rem;
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
