import { motion } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "preact/hooks";

import { useGlobalContext } from "../../../GlobalContext";

const TrainingHeader = ({ gameScores }) => {
  const gameStatus = useGlobalContext().gameStatus;
  const gameLevel = useGlobalContext().level;

  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if ("training-start" === gameStatus.value) {
      if (timer === 0) {
        return gameStatus.setValue("training-end");
      }
      const timer_interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(timer_interval);
      };
    }
    if (["play-hard-start", "play-normal-start"].includes(gameStatus.value)) {
      if (timer === 0) {
        return gameStatus.setValue("play-end");
      }
      const timer_interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(timer_interval);
      };
    }
    setTimer(59);
  }, [gameStatus.value, timer]);
  return (
    <Header>
      <Timer>0:{timer < 10 ? `0${timer}` : timer}</Timer>
      <Level>{gameLevel.value}</Level>
      <Points>{gameScores}</Points>
    </Header>
  );
};

export default TrainingHeader;

const Header = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  color: #fff;
  background: rgb(144, 155, 155);
  z-index: 2;

  & > * {
    font-size: 1rem;
  }
`;

const Timer = styled(motion.h3)`
  flex: 1;
  font-weight: 500;
  text-align: start;
`;
const Level = styled(motion.h3)`
  flex: 1;
  text-align: center;
  font-weight: 500;
`;
const Points = styled(motion.h3)`
  text-align: end;
  flex: 1;
  font-weight: 500;
`;
