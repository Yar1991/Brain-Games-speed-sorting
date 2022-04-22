import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "preact/hooks";
import { useGlobalContext } from "../../../GlobalContext";

const PlayStartModal = () => {
  const { gameStatus } = useGlobalContext();
  const [counter, setCounter] = useState(3);

  const animWrapperControl = useAnimation();
  const animCountControl = useAnimation();

  const animWrapper = {
    from: {
      opacity: 0,
      visibility: "hidden",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    to: {
      opacity: 1,
      visibility: "visible",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const animCount = {
    from: {
      y: "10rem",
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
    to: {
      y: "0rem",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (counter === 1) {
      animCountControl.start("from");
      const statusTimeout = setTimeout(() => {
        animWrapperControl.start("from");
        return gameStatus.setValue(gameStatus.value + "-start");
      }, 1000);

      return () => {
        clearTimeout(statusTimeout);
      };
    }

    const counterInterval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(counterInterval);
    };
  }, [counter]);

  return (
    <Wrapper variants={animWrapper} animate={animWrapperControl}>
      <CountBox variants={animCount} animate={animCountControl}>
        <CountValue>{counter}</CountValue>
      </CountBox>
    </Wrapper>
  );
};

export default PlayStartModal;

const Wrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b3837;
`;

const CountBox = styled(motion.div)`
  width: 120px;
  height: 120px;
  background: #e1e1e1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountValue = styled(motion.h3)`
  color: var(--f-color);
  font-size: 3.5rem;
`;
