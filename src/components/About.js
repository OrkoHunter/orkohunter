import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* font-family: Montserrat, serif; */
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 32px;
  text-align: center;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  font-weight: 400;
  text-align: center;
`;

const About = () => (
  <Container>
    <Title>Hello! My name is Himanshu Mishra</Title>
    <StaticImage
      src="../images/profile_pic.png"
      width={240}
      quality={100}
      alt="Himanshu Mishra"
      style={{
        marginTop: "32px",
        borderRadius: "120px",
      }}
    />

    <SubTitle>
      Open Source | Platform Engineering | Developer Experience | Hacker Mindset
    </SubTitle>
  </Container>
);

export default About;
