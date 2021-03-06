import styled from "styled-components";
import { motion } from "framer-motion";

import GameBox from "./components/GameBox";


const App = () => {
  return (
    <MainWrapper>
      <MainBg width="100%" height="100%" fill="none">
        <path
          d="M0 131H175V152H349V131H524V87H698V109H873V163H1047V87H1222V77H1396V109H1571V77H1745V174H1920V98V0H1745H1571H1396H1222H1047H873H698H524H349H175H0V131Z"
          fill="#CBEFE4"
          // offset={1}
          // pathLength={1}
          // strokeDasharray={1}
        />
        <path
          d="M0 433H175V509H349V325H524V249H698V422H873V390H1047V498H1222V282H1396V260H1571V357H1745V584H1920V357V96V172H1745V75H1571V107H1396V75H1222V85H1047V161H873V107H698V85H524V129H349V150H175V129H0V433Z"
          fill="#ADE1D2"
          // offset={1}
          // strokeDasharray={1}
          // pathLength={1}
        />
        <path
          d="M0 519H175V584H349V422H524H698V519H873V606H1047V617H1222V465H1396V455H1571H1745V800H1920V573V355V582H1745V355H1571V258H1396V280H1222V496H1047V388H873V420H698V247H524V323H349V507H175V431H0V519Z"
          fill="#82DABF"
          // offset={1}
          // strokeDasharray={1}
          // pathLength={1}
        />
        <path
          d="M0 833H175V692H349V725H524V649H698V681H873V822H1047V811H1222V595H1396V735H1571V725H1745V941H1920V692V571V798H1745V453H1571H1396V463H1222V615H1047V604H873V517H698V420H524H349V582H175V517H0V833Z"
          fill="#70D2B5"
          // offset={1}
          // strokeDasharray={1}
          // pathLength={1}
        />
        <path
          d="M0 1081H175H349H524H698H873H1047H1222H1396H1571H1745H1920V690V939H1745V723H1571V733H1396V593H1222V809H1047V820H873V679H698V647H524V723H349V690H175V831H0V1081Z"
          fill="#6EC2A9"
          // offset={1}
          // strokeDasharray={1}
          // pathLength={1}
        />
      </MainBg>

      <GameBox />
    </MainWrapper>
  );
};

export default App;

const MainWrapper = styled(motion.section)`
  height: 100%;
  position: relative;
  isolation: isolate;
  overflow: hidden;
`;

const MainBg = styled(motion.svg)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
