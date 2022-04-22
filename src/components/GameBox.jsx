import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Start from "./game-components/Start";

const GameBox = () => {
  const animWrapper = {
    from: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.7,
        ease: "easeIn",
      },
    },
    to: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <Wrapper variants={animWrapper} animate="to" initial="from">
      <Start />
    </Wrapper>
  );
};

export default GameBox;

const Wrapper = styled(motion.div)`
  position: relative;
  top: 15%;
  width: 800px;
  height: 600px;
  margin: auto;
  background: #f8f8f8;
  box-shadow: 0 0 10px hsl(0 0% 0% / 0.4);
  border-radius: 1rem;
  overflow: hidden;
`;
