import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa";

const IconButton = styled.button`
  width: 48px;
  height: 48px;
  border: 1px solid black;
  border-radius: 24px;
  background-color: transparent;

  z-index: 99;
  position: fixed;
  right: 2vw;
  bottom: 2vh;
  color: black;

  &:hover {
    transition: 0.3s;
    padding-bottom: 8px;
  }
`;

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <IconButton onClick={handleClick} aria-label="to top">
          <FaChevronUp size={16} />
        </IconButton>
      )}
    </div>
  );
};
export default Scroll;
