import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Types
interface MarkProps {
  value: string;
}

const MarkContainer = styled(motion.div)`
  font-size: 4rem;
`;

const Mark: React.FC<MarkProps> = ({ value }) => {
  return (
    <MarkContainer
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {value}
    </MarkContainer>
  );
};

export default Mark;
