import React from "react";
import styled from "styled-components";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  margin-top: 32px;
  font-size: 20px;
`;

const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 128px;
  gap: 8px;
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DateTimeContainer = ({ date, timeToRead }) => (
  <Container>
    <CalendarContainer>
      <FaCalendarAlt size={16} />
      <span>{date}</span>
    </CalendarContainer>
    <ClockContainer>
      <FaRegClock size={16} />
      <span>{timeToRead} min</span>
    </ClockContainer>
  </Container>
);

export default DateTimeContainer;
